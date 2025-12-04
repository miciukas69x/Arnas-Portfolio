/**
 * Performance monitoring utilities
 */

export function measureFPS(callback: (fps: number) => void) {
  let lastTime = performance.now();
  let frames = 0;
  let fps = 0;

  function tick() {
    frames++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime + 1000) {
      fps = Math.round((frames * 1000) / (currentTime - lastTime));
      callback(fps);
      frames = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

export function logPerformanceMetrics() {
  if (typeof window === 'undefined') return;

  // Log Web Vitals
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            const paintEntry = entry as PerformancePaintTiming;
            console.log(`[Performance] ${paintEntry.name}: ${paintEntry.startTime.toFixed(2)}ms`);
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'measure'] });
    } catch {
      // PerformanceObserver not supported
    }
  }

  // Log resource loading times
  if (performance.getEntriesByType) {
    const resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter(
      (r) => r.duration > 1000
    ) as PerformanceResourceTiming[];

    if (slowResources.length > 0) {
      console.warn('[Performance] Slow resources detected:', slowResources.map(r => ({
        name: r.name,
        duration: `${r.duration.toFixed(2)}ms`,
      })));
    }
  }
}

export function getBundleSize() {
  if (typeof window === 'undefined') return null;

  const scripts = Array.from(document.querySelectorAll('script[src]'));
  const totalSize = scripts.reduce((acc, script) => {
    const src = script.getAttribute('src');
    if (src && src.startsWith('/_next/static')) {
      // Estimate: scripts are typically gzipped, so we can't get exact size
      // This is a placeholder for actual bundle size tracking
      return acc;
    }
    return acc;
  }, 0);

  return totalSize;
}

