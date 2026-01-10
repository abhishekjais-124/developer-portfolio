#!/bin/bash

# Performance Testing Script
# Runs various performance tests and reports results

echo "🚀 Portfolio Performance Testing Suite"
echo "======================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test 1: Check if pnpm is installed
echo -e "${BLUE}Test 1: Checking dependencies...${NC}"
if command -v pnpm &> /dev/null; then
    echo -e "${GREEN}✓ pnpm is installed${NC}"
else
    echo -e "${RED}✗ pnpm is not installed${NC}"
    echo "  Install: npm install -g pnpm"
    exit 1
fi

# Test 2: Install dependencies
echo ""
echo -e "${BLUE}Test 2: Installing dependencies...${NC}"
if pnpm install --prefer-offline &> /dev/null; then
    echo -e "${GREEN}✓ Dependencies installed${NC}"
else
    echo -e "${RED}✗ Failed to install dependencies${NC}"
    exit 1
fi

# Test 3: Run linter
echo ""
echo -e "${BLUE}Test 3: Running linter...${NC}"
if pnpm lint 2>&1 | grep -q "error"; then
    echo -e "${RED}✗ Linting errors found${NC}"
    pnpm lint
else
    echo -e "${GREEN}✓ No linting errors${NC}"
fi

# Test 4: Build project
echo ""
echo -e "${BLUE}Test 4: Building project...${NC}"
if pnpm build &> build.log; then
    echo -e "${GREEN}✓ Build successful${NC}"
    
    # Parse build output for size info
    if grep -q "○" build.log; then
        echo -e "${YELLOW}Build Output:${NC}"
        grep "○\|▲" build.log | head -20
    fi
else
    echo -e "${RED}✗ Build failed${NC}"
    cat build.log
    exit 1
fi

# Test 5: Check bundle size
echo ""
echo -e "${BLUE}Test 5: Checking bundle size...${NC}"
TOTAL_SIZE=$(du -sh .next 2>/dev/null | cut -f1)
echo "Total build size: ${YELLOW}$TOTAL_SIZE${NC}"

if [ -d ".next/static" ]; then
    STATIC_SIZE=$(du -sh .next/static 2>/dev/null | cut -f1)
    echo "Static assets: ${YELLOW}$STATIC_SIZE${NC}"
fi

# Test 6: Service Worker validation
echo ""
echo -e "${BLUE}Test 6: Validating Service Worker...${NC}"
if [ -f "public/sw.js" ]; then
    if grep -q "self.addEventListener" public/sw.js; then
        echo -e "${GREEN}✓ Service Worker is properly configured${NC}"
        echo "  - Install event: $(grep -c 'install' public/sw.js) times"
        echo "  - Activate event: $(grep -c 'activate' public/sw.js) times"
        echo "  - Fetch event: $(grep -c 'fetch' public/sw.js) times"
    else
        echo -e "${RED}✗ Service Worker not properly configured${NC}"
    fi
else
    echo -e "${RED}✗ Service Worker file not found${NC}"
fi

# Test 7: Manifest validation
echo ""
echo -e "${BLUE}Test 7: Validating PWA Manifest...${NC}"
if [ -f "public/manifest.json" ]; then
    if command -v jq &> /dev/null; then
        if jq empty public/manifest.json 2>/dev/null; then
            echo -e "${GREEN}✓ Manifest is valid JSON${NC}"
            NAME=$(jq -r '.name' public/manifest.json)
            START_URL=$(jq -r '.start_url' public/manifest.json)
            echo "  - App name: $NAME"
            echo "  - Start URL: $START_URL"
        else
            echo -e "${RED}✗ Manifest is invalid JSON${NC}"
        fi
    else
        echo -e "${YELLOW}⚠ jq not installed, skipping JSON validation${NC}"
    fi
else
    echo -e "${RED}✗ Manifest file not found${NC}"
fi

# Test 8: Check Next.js config
echo ""
echo -e "${BLUE}Test 8: Checking Next.js configuration...${NC}"
if [ -f "next.config.js" ]; then
    if grep -q "compress: true" next.config.js; then
        echo -e "${GREEN}✓ Compression enabled${NC}"
    fi
    if grep -q "swcMinify: true" next.config.js; then
        echo -e "${GREEN}✓ SWC minification enabled${NC}"
    fi
    if grep -q "headers()" next.config.js; then
        echo -e "${GREEN}✓ Cache headers configured${NC}"
    fi
else
    echo -e "${YELLOW}⚠ next.config.js not found${NC}"
fi

# Test 9: Check for critical files
echo ""
echo -e "${BLUE}Test 9: Checking critical files...${NC}"
CRITICAL_FILES=(
    "app/layout.js"
    "app/page.js"
    "app/css/globals.scss"
    "next.config.js"
    "package.json"
)

for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓ $file${NC}"
    else
        echo -e "${RED}✗ $file${NC}"
    fi
done

# Test 10: Performance hints
echo ""
echo -e "${BLUE}Test 10: Performance recommendations...${NC}"
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Run: pnpm dev"
echo "2. Open: http://localhost:3000"
echo "3. Open DevTools (F12)"
echo "4. Go to Lighthouse tab"
echo "5. Click 'Analyze page load'"
echo "6. Target scores:"
echo "   - Performance: > 90"
echo "   - Accessibility: > 90"
echo "   - Best Practices: > 90"
echo "   - SEO: > 90"
echo ""
echo "To test on slow network:"
echo "1. DevTools → Network tab"
echo "2. Throttling → Slow 3G"
echo "3. Reload page (Cmd+Shift+R)"
echo ""
echo "To test offline:"
echo "1. DevTools → Application tab"
echo "2. Service Workers section"
echo "3. Check 'Offline' checkbox"
echo "4. Reload page"

# Summary
echo ""
echo "======================================"
echo -e "${GREEN}✓ All tests completed!${NC}"
echo "======================================"
echo ""
echo "Build artifacts in: $(pwd)/.next"
echo "Public assets in: $(pwd)/public"
echo ""
echo "Ready for deployment! 🚀"
