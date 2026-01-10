#!/bin/bash

# Portfolio Performance Checklist
# This script verifies all optimizations are in place

echo "════════════════════════════════════════════════════════════════"
echo "🚀 Portfolio Performance Optimization Checklist"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Counter
PASSED=0
FAILED=0
TOTAL=0

# Function to check
check() {
  TOTAL=$((TOTAL + 1))
  local name=$1
  local condition=$2
  
  if eval "$condition"; then
    echo -e "${GREEN}✓${NC} $name"
    PASSED=$((PASSED + 1))
  else
    echo -e "${RED}✗${NC} $name"
    FAILED=$((FAILED + 1))
  fi
}

echo -e "${BLUE}1. FILES & STRUCTURE${NC}"
echo "─────────────────────────────────────────────────────────────────"
check "Service Worker exists" "[ -f 'public/sw.js' ]"
check "PWA Manifest exists" "[ -f 'public/manifest.json' ]"
check "Lazy image component exists" "[ -f 'app/components/helper/lazy-image.jsx' ]"
check "Network hook exists" "[ -f 'app/hooks/useNetworkInfo.js' ]"
check "Performance utils exist" "[ -f 'utils/performance-utils.js' ]"
echo ""

echo -e "${BLUE}2. CONFIGURATION${NC}"
echo "─────────────────────────────────────────────────────────────────"
check "next.config.js exists" "[ -f 'next.config.js' ]"
check "Compression enabled" "grep -q 'compress: true' next.config.js"
check "Package optimization enabled" "grep -q 'optimizePackageImports' next.config.js"
check "postcss.config.js exists" "[ -f 'postcss.config.js' ]"
check "tailwind.config.js exists" "[ -f 'tailwind.config.js' ]"
echo ""

echo -e "${BLUE}3. SERVICE WORKER${NC}"
echo "─────────────────────────────────────────────────────────────────"
check "SW install event" "grep -q \"'install'\" public/sw.js"
check "SW activate event" "grep -q \"'activate'\" public/sw.js"
check "SW fetch event" "grep -q \"'fetch'\" public/sw.js"
check "Cache strategy implemented" "grep -q 'cache-first\|network-first' public/sw.js"
check "Offline fallback" "grep -q 'offlineResponse' public/sw.js"
echo ""

echo -e "${BLUE}4. PWA MANIFEST${NC}"
echo "─────────────────────────────────────────────────────────────────"
check "Manifest has app name" "grep -q '\"name\"' public/manifest.json"
check "Manifest has start_url" "grep -q '\"start_url\"' public/manifest.json"
check "Manifest has display mode" "grep -q '\"display\"' public/manifest.json"
check "Manifest has icons" "grep -q '\"icons\"' public/manifest.json"
check "Manifest has theme color" "grep -q '\"theme_color\"' public/manifest.json"
echo ""

echo -e "${BLUE}5. OPTIMIZATION FEATURES${NC}"
echo "─────────────────────────────────────────────────────────────────"
check "Lazy loading implemented" "grep -q 'lazy(' app/components/homepage/visualizations/index.jsx"
check "Suspense boundaries added" "grep -q '<Suspense' app/components/homepage/visualizations/index.jsx"
check "Network detection hook" "grep -q 'useNetworkInfo' app/hooks/useNetworkInfo.js"
check "GPU acceleration CSS" "grep -q 'will-change\|transform.*translateZ' app/css/globals.scss"
check "Performance utilities" "grep -q 'getNetworkType\|getImageQuality' utils/performance-utils.js"
echo ""

echo -e "${BLUE}6. CSS OPTIMIZATIONS${NC}"
echo "─────────────────────────────────────────────────────────────────"
check "Shimmer animation" "grep -q '@keyframes shimmer' app/css/globals.scss"
check "Reduced motion support" "grep -q 'prefers-reduced-motion' app/css/globals.scss"
check "Content visibility" "grep -q 'content-visibility' app/css/globals.scss"
check "Backface visibility" "grep -q 'backface-visibility' app/css/globals.scss"
check "Will-change property" "grep -q 'will-change' app/css/globals.scss"
echo ""

echo -e "${BLUE}7. LAYOUT & COMPONENTS${NC}"
echo "─────────────────────────────────────────────────────────────────"
check "Layout includes metadata" "grep -q 'metadata' app/layout.js"
check "Service worker registered" "grep -q 'ServiceWorkerRegister' app/layout.js"
check "Manifest in layout" "grep -q 'manifest' app/layout.js"
check "Viewport meta tag" "grep -q 'viewport' app/layout.js"
check "Visualizations have lazy loading" "grep -q 'lazy(' app/components/homepage/visualizations/index.jsx"
echo ""

echo -e "${BLUE}8. DOCUMENTATION${NC}"
echo "─────────────────────────────────────────────────────────────────"
check "PERFORMANCE.md exists" "[ -f 'PERFORMANCE.md' ]"
check "BUILD_GUIDE.md exists" "[ -f 'BUILD_GUIDE.md' ]"
check "OPTIMIZATION_SUMMARY.md exists" "[ -f 'OPTIMIZATION_SUMMARY.md' ]"
check "OPTIMIZATION_COMPLETE.md exists" "[ -f 'OPTIMIZATION_COMPLETE.md' ]"
echo ""

echo -e "${BLUE}9. BUILD STATUS${NC}"
echo "─────────────────────────────────────────────────────────────────"
if [ -d ".next" ]; then
  echo -e "${GREEN}✓${NC} Build directory exists (.next/)"
  PASSED=$((PASSED + 1))
  TOTAL=$((TOTAL + 1))
  
  if [ -f ".next/export-marker.json" ]; then
    echo -e "${GREEN}✓${NC} Static export completed"
    PASSED=$((PASSED + 1))
    TOTAL=$((TOTAL + 1))
  else
    echo -e "${YELLOW}⚠${NC} Static export may need update"
    TOTAL=$((TOTAL + 1))
  fi
else
  echo -e "${YELLOW}⚠${NC} Build directory not found (run 'pnpm build')"
  FAILED=$((FAILED + 2))
  TOTAL=$((TOTAL + 2))
fi
echo ""

echo -e "${BLUE}10. PACKAGE.JSON${NC}"
echo "─────────────────────────────────────────────────────────────────"
check "React installed" "grep -q '\"react\"' package.json"
check "Next.js installed" "grep -q '\"next\"' package.json"
check "Recharts installed" "grep -q '\"recharts\"' package.json"
check "React Icons installed" "grep -q '\"react-icons\"' package.json"
check "Tailwind installed" "grep -q '\"tailwindcss\"' package.json"
echo ""

# Summary
echo "════════════════════════════════════════════════════════════════"
echo -e "${BLUE}SUMMARY${NC}"
echo "════════════════════════════════════════════════════════════════"
echo -e "Total Checks: $TOTAL"
echo -e "${GREEN}Passed: $PASSED${NC}"
if [ $FAILED -gt 0 ]; then
  echo -e "${RED}Failed: $FAILED${NC}"
else
  echo -e "${GREEN}Failed: $FAILED${NC}"
fi
echo ""

# Calculate percentage
if [ $TOTAL -gt 0 ]; then
  PERCENTAGE=$((PASSED * 100 / TOTAL))
  echo -e "Success Rate: ${PERCENTAGE}%"
fi

echo ""
if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}════════════════════════════════════════════════════════════════${NC}"
  echo -e "${GREEN}✨ ALL OPTIMIZATIONS IN PLACE! ✨${NC}"
  echo -e "${GREEN}════════════════════════════════════════════════════════════════${NC}"
  echo ""
  echo "Your portfolio is optimized for fast loading on slow connections!"
  echo ""
  echo "Next steps:"
  echo "1. Run: pnpm dev"
  echo "2. Test: http://localhost:3000"
  echo "3. Check performance: DevTools → Lighthouse"
  echo "4. Deploy to production"
  echo ""
  exit 0
else
  echo -e "${YELLOW}════════════════════════════════════════════════════════════════${NC}"
  echo -e "${YELLOW}⚠️  SOME ITEMS NEED ATTENTION${NC}"
  echo -e "${YELLOW}════════════════════════════════════════════════════════════════${NC}"
  echo ""
  echo "Please check the failed items above and ensure all files are in place."
  echo ""
  exit 1
fi
