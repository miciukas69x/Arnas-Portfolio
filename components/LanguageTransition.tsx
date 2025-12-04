"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState, useRef } from 'react';

// Global flag to track if user has manually changed language
let userInitiatedChange = false;

export function LanguageTransition({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevLanguageRef = useRef<string | null>(null);
  const isInitialMount = useRef(true);
  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userInitiatedRef = useRef(false);

  // Watch for user-initiated flag to start blackout immediately
  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (userInitiatedChange && !userInitiatedRef.current && !isInitialMount.current) {
        userInitiatedRef.current = true;
        // Start blackout immediately when user clicks
        setIsTransitioning(true);
      }
    }, 10); // Check every 10ms for immediate response

    return () => clearInterval(checkInterval);
  }, []);

  useEffect(() => {
    // On initial mount, just set the ref and skip
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevLanguageRef.current = language;
      return;
    }

    // When language actually changes (after the 0.5s delay)
    if (
      prevLanguageRef.current !== null && 
      language !== prevLanguageRef.current &&
      userInitiatedRef.current
    ) {
      prevLanguageRef.current = language;
      userInitiatedRef.current = false; // Reset flag
      userInitiatedChange = false; // Reset global flag
      
      // End transition after fade out animation (150ms)
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
      transitionTimerRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 150); // Just fade out time
      
      return () => {
        if (transitionTimerRef.current) {
          clearTimeout(transitionTimerRef.current);
        }
      };
    } else if (!userInitiatedRef.current) {
      // Update ref but don't trigger animation
      prevLanguageRef.current = language;
    }
  }, [language]);

  return (
    <>
      {children}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="blackout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black z-[9999] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </>
  );
}

// Export function to mark language change as user-initiated
export function markLanguageChangeAsUserInitiated() {
  userInitiatedChange = true;
}
