// Cache names for versioning
const CACHE_VERSION = 'v1';
const CACHE_NAMES = {
  static: `portfolio-static-${CACHE_VERSION}`,
  dynamic: `portfolio-dynamic-${CACHE_VERSION}`,
  images: `portfolio-images-${CACHE_VERSION}`,
  fonts: `portfolio-fonts-${CACHE_VERSION}`,
};

const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
];

const STATIC_ASSETS = [
  // CSS and JS bundles - these are hashed in production
  '/_next/static/',
];

// Install event - Pre-cache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAMES.static).then((cache) => {
        return cache.addAll(URLS_TO_CACHE).catch(err => {
          console.log('Error caching URLs:', err);
        });
      }),
    ]).then(() => {
      self.skipWaiting();
    })
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete caches that aren't in our current list
          const isCurrentCache = Object.values(CACHE_NAMES).includes(cacheName);
          if (!isCurrentCache) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

// Fetch event with intelligent caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions and external requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  // API requests - network first with short timeout
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirstStrategy(request, CACHE_NAMES.dynamic, 3000));
    return;
  }

  // Fonts - cache first (they rarely change)
  if (
    request.destination === 'font' ||
    url.pathname.match(/\.(woff2?|ttf|otf)$/)
  ) {
    event.respondWith(cacheFirstStrategy(request, CACHE_NAMES.fonts));
    return;
  }

  // Images - cache first with network fallback
  if (
    request.destination === 'image' ||
    url.pathname.match(/\.(webp|png|jpg|jpeg|gif|svg)$/)
  ) {
    event.respondWith(cacheFirstStrategy(request, CACHE_NAMES.images, 30)); // keep max 30 images
    return;
  }

  // Static assets (JS/CSS) - cache first
  if (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.match(/\.(js|css)$/)
  ) {
    event.respondWith(cacheFirstStrategy(request, CACHE_NAMES.static));
    return;
  }

  // HTML pages - network first with fallback
  if (request.destination === 'document' || url.pathname.endsWith('/')) {
    event.respondWith(networkFirstStrategy(request, CACHE_NAMES.dynamic, 5000));
    return;
  }

  // Default - network first with cache fallback
  event.respondWith(networkFirstStrategy(request, CACHE_NAMES.dynamic));
});

/**
 * Network first strategy: try network, fallback to cache
 */
function networkFirstStrategy(request, cacheName, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      // Timeout - try cache
      caches
        .match(request)
        .then(response => {
          resolve(response || offlineResponse());
        })
        .catch(() => resolve(offlineResponse()));
    }, timeout);

    fetch(request)
      .then((response) => {
        clearTimeout(timeoutId);

        // Don't cache non-successful responses
        if (!response || response.status !== 200) {
          resolve(response);
          return;
        }

        // Clone and cache successful responses
        const responseToCache = response.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(request, responseToCache).catch(() => {
            // Cache storage might be full
            console.log('Failed to cache:', request.url);
          });
        });

        resolve(response);
      })
      .catch(() => {
        clearTimeout(timeoutId);
        // Network failed - try cache
        caches
          .match(request)
          .then(response => {
            resolve(response || offlineResponse());
          })
          .catch(() => resolve(offlineResponse()));
      });
  });
}

/**
 * Cache first strategy: try cache, fallback to network
 */
function cacheFirstStrategy(request, cacheName, maxItems = 50) {
  return caches.match(request).then((response) => {
    if (response) {
      return response;
    }

    return fetch(request)
      .then((response) => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200) {
          return response;
        }

        // Clone and cache
        const responseToCache = response.clone();
        caches.open(cacheName).then((cache) => {
          // Implement cache size limits
          if (maxItems) {
            cache.keys().then(keys => {
              if (keys.length > maxItems) {
                cache.delete(keys[0]); // Remove oldest
              }
            });
          }
          cache.put(request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        // Network failed - show offline page
        return offlineResponse();
      });
  });
}

/**
 * Offline fallback response
 */
function offlineResponse() {
  return new Response(
    `<!DOCTYPE html>
<html>
<head>
  <title>Offline</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #050915 0%, #0b1024 100%);
      color: #fff;
    }
    .offline-message {
      text-align: center;
      padding: 2rem;
    }
    h1 { font-size: 2.5rem; margin: 0 0 1rem 0; }
    p { font-size: 1.1rem; color: rgba(255,255,255,0.7); }
  </style>
</head>
<body>
  <div class="offline-message">
    <h1>📡 Offline</h1>
    <p>You're currently offline. Cached content is available.</p>
    <p style="margin-top: 2rem; font-size: 0.9rem;">Try refreshing the page or check your connection.</p>
  </div>
</body>
</html>`,
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: new Headers({
        'Content-Type': 'text/html; charset=utf-8',
      }),
    }
  );
}

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then(cacheNames => {
      Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    });
  }
});

