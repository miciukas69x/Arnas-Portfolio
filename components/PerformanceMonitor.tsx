"use client";

import { useEffect } from 'react';
import { logPerformanceMetrics } from '@/lib/performance';

export function PerformanceMonitor() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      logPerformanceMetrics();
    }
  }, []);

  return null;
}

