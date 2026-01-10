# Build & Deployment Optimization Guide

## Quick Start

### Development Mode
```bash
# Install dependencies
pnpm install

# Start dev server with optimizations
pnpm dev

# Server runs at http://localhost:3000
```

### Production Build
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📊 Build Optimization Checklist

### Before Building

- [ ] Remove unused dependencies
  ```bash
  pnpm install
  pnpm prune
  ```

- [ ] Check bundle size
  ```bash
  # Install analyzer
  pnpm add --save-dev @next/bundle-analyzer
  ```

- [ ] Verify no console logs in production
  ```bash
  grep -r "console\." app/ --include="*.jsx" --include="*.js"
  ```

### Building

- [ ] Run build
  ```bash
  pnpm build
  ```

- [ ] Check build size
  - Next.js shows size report automatically
  - Total bundle should be < 200KB gzipped for portfolio

- [ ] Verify no errors
  ```bash
  # Build output should show 0 errors
  ```

### After Build

- [ ] Test production build locally
  ```bash
  pnpm start
  # Test at http://localhost:3000
  ```

- [ ] Run Lighthouse audit
  - DevTools → Lighthouse
  - Performance score should be > 90

- [ ] Test on slow network
  - DevTools → Network → Slow 3G
  - Should load in < 3 seconds

- [ ] Test on mobile
  - DevTools → Device Emulation
  - Check responsiveness and performance

## 🚀 Deployment Optimization

### For Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Automatic Optimizations:**
- HTTP/2 push
- Automatic compression (Gzip & Brotli)
- CDN caching
- Edge caching
- Image optimization (via Vercel Image Optimization)

### For Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Automatic Optimizations:**
- Edge functions
- Asset optimization
- Automatic compression
- CDN caching

### For GitHub Pages (Static)
```bash
# Build static site
pnpm build

# Deploy out/ directory to GitHub Pages
# Update .github/workflows/deploy.yml
```

## 📈 Performance Metrics

### Ideal Scores

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | 90+ | TBD |
| Largest Contentful Paint (LCP) | < 2.5s | TBD |
| First Input Delay (FID) | < 100ms | TBD |
| Cumulative Layout Shift (CLS) | < 0.1 | TBD |
| Total Size (Gzipped) | < 200KB | TBD |
| Time to Interactive | < 3.5s | TBD |

### Run PageSpeed Insights
```
https://pagespeed.web.dev/?url=YOUR_DEPLOYED_URL
```

## 🔧 Cache Strategy

### Service Worker Caching

**Fonts** (Cache First)
- Cached for duration of app life
- 10 items max in cache
- Never stale

**Images** (Cache First)
- Cached on first visit
- 30 items max in cache
- Network fallback

**Static Assets** (Cache First)
- CSS, JS bundles
- Versioned in production
- Max 1 year cache

**HTML Pages** (Network First)
- Try network first (timeout: 5s)
- Fallback to cache
- 1 hour server cache

**API Calls** (Network First)
- Try network first (timeout: 3s)
- Fallback to cache
- No cache store (browsers default)

## 🌍 CDN Configuration

### Recommended CDN Providers
1. **Vercel Edge Network** (Built-in)
   - Automatic
   - Closest to users
   - Best for Next.js

2. **Cloudinary** (Images)
   - Image optimization
   - Transformation
   - 1-year cache

3. **Unpkg** (NPM packages)
   - JS library delivery
   - Global CDN
   - Automatic minification

## 📦 Bundle Analysis

### Using Bundle Analyzer

1. **Install**
   ```bash
   pnpm add --save-dev @next/bundle-analyzer
   ```

2. **Configure next.config.js**
   ```javascript
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   });

   module.exports = withBundleAnalyzer({
     // ... rest of config
   });
   ```

3. **Run**
   ```bash
   ANALYZE=true pnpm build
   ```

### Expected Bundle Sizes

- **Next.js Framework**: ~40KB gzipped
- **React**: ~42KB gzipped
- **Recharts**: ~50KB gzipped
- **React Icons**: ~30KB gzipped
- **Application Code**: ~30KB gzipped
- **Total**: ~190KB gzipped

## 🔍 Monitoring

### Enable Error Tracking
```javascript
// Consider adding Sentry or similar
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
});
```

### Monitor Core Web Vitals
```javascript
// Monitor in production
export function reportWebVitals(metric) {
  console.log(metric);
  // Send to analytics
}
```

## 🛡️ Security Headers

Automatically set in next.config.js:
- `X-Frame-Options`: SAMEORIGIN
- `X-XSS-Protection`: 1; mode=block
- `X-Content-Type-Options`: nosniff
- `Referrer-Policy`: strict-origin-when-cross-origin

## 📱 Progressive Web App

### Installation
1. Visit deployed site
2. Click "Install" or "Add to Home Screen"
3. App installs like native app
4. Works offline with cached content

### Update Strategy
- Service worker checks for updates every 24 hours
- Prompt user to reload for latest version
- No breaking changes on update

## 🚨 Common Issues & Solutions

### Issue: Cache Not Clearing
**Solution:** Service worker version changes automatically
- Cache name includes version
- Old caches deleted on activation

### Issue: Slow First Load
**Solution:** Check network tab
- Verify service worker registered
- Confirm caching headers applied
- Test with DevTools throttling

### Issue: Images Not Loading
**Solution:**
- Check CORS headers if using external CDN
- Verify image URLs in manifest
- Test lazy loading implementation

### Issue: Bundle Size Too Large
**Solution:**
- Use bundle analyzer to find culprits
- Consider dynamic imports for heavy libraries
- Tree-shake unused code with webpack

## 📚 Testing Commands

```bash
# Development
pnpm dev

# Production build
pnpm build && pnpm start

# Lint check
pnpm lint

# Bundle analysis
ANALYZE=true pnpm build

# Test on slow network
# DevTools → Network → Slow 3G

# Test offline
# DevTools → Application → Service Workers → offline
```

## ✅ Pre-Deployment Checklist

- [ ] All builds complete without errors
- [ ] No console warnings or errors
- [ ] Lighthouse score > 90
- [ ] Mobile responsive works
- [ ] Service worker registers
- [ ] Cache headers correct
- [ ] All images load
- [ ] Forms submit correctly
- [ ] Links work correctly
- [ ] Dark/Light theme works
- [ ] Animations smooth on slow network
- [ ] Offline page displays correctly

## 🎯 Next Steps

1. Deploy to production
2. Monitor performance with Lighthouse
3. Enable analytics to track real user metrics
4. Optimize based on real-world data
5. Add error tracking (Sentry)
6. Set up automated performance monitoring

## 📞 Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Web.dev Performance](https://web.dev/performance/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Vercel Documentation](https://vercel.com/docs)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
