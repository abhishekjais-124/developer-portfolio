# 📖 Quick Reference Guide

## 🚀 Getting Started

### Development Server
```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server at http://localhost:3000
```

### Production Build
```bash
pnpm build      # Create optimized build
pnpm start      # Start production server
```

## 🧪 Testing Performance

### Quick Lighthouse Test
1. Open DevTools (F12)
2. Go to **Lighthouse** tab
3. Click "Analyze page load"
4. Target: **90+ in all categories**

### Test on Slow Network
1. DevTools → **Network** tab
2. Throttling: **Slow 3G**
3. Hard refresh: **Cmd+Shift+R**
4. Should load in < 3 seconds

### Test Offline
1. DevTools → **Application** tab
2. Service Workers → Check **Offline**
3. Reload page → Should work!

## 📱 Install as App

### Mobile (iPhone/Android)
1. Open in mobile browser
2. Tap **Share** (iOS) or **Menu** (Android)
3. Select **"Add to Home Screen"** or **"Install"**
4. Launch from home screen

### Desktop
1. Click **Install** prompt in address bar
2. Or use menu → **Install**
3. Opens as standalone window

## 📊 Check Performance

### Service Worker Status
```javascript
// In console
navigator.serviceWorker.getRegistrations()
  .then(r => console.log('SW:', r[0]?.active ? 'Active' : 'Inactive'))
```

### Cache Contents
1. DevTools → **Application**
2. **Cache Storage** → Select cache
3. View all cached assets

### Network Type
```javascript
// In console
const conn = navigator.connection || navigator.mozConnection;
console.log(conn?.effectiveType); // '2g', '3g', '4g'
```

## 🔧 Using Optimization Features

### Lazy Image Component
```jsx
import LazyImage from '@/components/helper/lazy-image';

<LazyImage 
  src="image.jpg" 
  alt="Description"
  className="w-full h-auto"
/>
```

### Network Detection
```jsx
import { useNetworkInfo } from '@/app/hooks/useNetworkInfo';

function MyComponent() {
  const { isSlowConnection, imageQuality } = useNetworkInfo();
  
  return (
    <img 
      src={isSlowConnection ? lowQuality : highQuality}
      alt="..."
    />
  );
}
```

### Lazy Loading Components
```jsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./heavy'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

## 📁 Key Files

| File | Purpose |
|------|---------|
| [public/sw.js](public/sw.js) | Service worker |
| [public/manifest.json](public/manifest.json) | PWA manifest |
| [app/hooks/useNetworkInfo.js](app/hooks/useNetworkInfo.js) | Network detection |
| [app/components/helper/lazy-image.jsx](app/components/helper/lazy-image.jsx) | Lazy images |
| [utils/performance-utils.js](utils/performance-utils.js) | Performance helpers |
| [next.config.js](next.config.js) | Build config |
| [app/css/globals.scss](app/css/globals.scss) | Global styles |

## 📚 Documentation Files

| File | Content |
|------|---------|
| [PERFORMANCE.md](PERFORMANCE.md) | Detailed optimization guide |
| [BUILD_GUIDE.md](BUILD_GUIDE.md) | Build & deployment |
| [OPTIMIZATION_SUMMARY.md](OPTIMIZATION_SUMMARY.md) | Technical summary |
| [OPTIMIZATION_COMPLETE.md](OPTIMIZATION_COMPLETE.md) | Complete overview |
| [FINAL_REPORT.md](FINAL_REPORT.md) | Performance report |

## 🎯 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Performance | 90+ | ✅ |
| Largest Contentful Paint | < 2.5s | ✅ |
| First Input Delay | < 100ms | ✅ |
| Cumulative Layout Shift | < 0.1 | ✅ |
| Total Size (gzipped) | < 200KB | ✅ |

## 🚀 Deployment Commands

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod
```

### GitHub Pages
```bash
pnpm build
# Deploy .next/ and public/ directories
```

## 🔍 Troubleshooting

### Service Worker Not Working
```javascript
// Clear everything
navigator.serviceWorker.getRegistrations()
  .then(r => r.forEach(reg => reg.unregister()))
caches.keys().then(names => 
  Promise.all(names.map(n => caches.delete(n)))
)
// Refresh page
```

### Cache Issues
1. DevTools → Application → Cache Storage
2. Select and delete problematic cache
3. Hard refresh (Cmd+Shift+R)

### Poor Performance
1. Run Lighthouse audit
2. Check Network tab for bottlenecks
3. Verify Service Worker active
4. Test on actual slow network

## 📞 Quick Links

- **[Google PageSpeed](https://pagespeed.web.dev)** - Performance metrics
- **[WebPageTest](https://www.webpagetest.org)** - Detailed analysis
- **[Chrome DevTools](chrome://devtools)** - Built-in testing
- **[Next.js Docs](https://nextjs.org/docs)** - Framework docs

## ✅ Pre-Deployment Checklist

- [ ] Run `pnpm build` - no errors
- [ ] Run Lighthouse - 90+ score
- [ ] Test on Slow 3G - < 3 sec load
- [ ] Test offline - works fully
- [ ] Test on mobile - responsive
- [ ] Check all links - no 404s
- [ ] Form submission - working
- [ ] Dark/light theme - both work
- [ ] Service Worker - active
- [ ] PWA installable - installs

## 🎉 Success Indicators

✅ Service Worker registered in DevTools  
✅ Cache Storage shows multiple caches  
✅ Offline mode shows cached content  
✅ Lighthouse score 90+  
✅ Load time < 3 seconds on Slow 3G  
✅ Animations smooth (60fps)  
✅ Install prompt appears on mobile  
✅ All images lazy load  
✅ Forms work smoothly  
✅ Navigation is fast  

## 💡 Pro Tips

**Tip 1**: Always hard refresh (Cmd+Shift+R) to test SW updates  
**Tip 2**: Use Slow 3G for real-world testing  
**Tip 3**: Monitor Core Web Vitals monthly  
**Tip 4**: Update Service Worker version for deployment  
**Tip 5**: Test on real devices, not just emulation  

---

**Questions?** Check [FINAL_REPORT.md](FINAL_REPORT.md) for complete details.

**Need help?** See [BUILD_GUIDE.md](BUILD_GUIDE.md) for troubleshooting.

**Want more info?** Read [PERFORMANCE.md](PERFORMANCE.md) for deep dive.

**Ready to deploy?** Use `vercel --prod` for instant deployment!

🚀 **Happy coding and optimizing!**
