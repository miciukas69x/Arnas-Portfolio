"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { markLanguageChangeAsUserInitiated } from '@/components/LanguageTransition';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memoize navItems to prevent recreation on every render
  const navItems = useMemo(() => [
    { href: '/story', label: t('nav.story') },
    { href: '/testimonials', label: t('nav.testimonials') },
    { href: '/case-studies', label: t('nav.caseStudies') },
    { href: '/services', label: t('nav.services') },
    { href: '/resources', label: t('nav.resources') },
  ], [t]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4"
    >
      <div className={`glass px-3 sm:px-6 py-2 sm:py-3 flex items-center gap-3 sm:gap-6 md:gap-8 transition-all duration-300 w-full sm:w-auto max-w-full sm:max-w-none relative ${
        isScrolled ? 'bg-card/90' : ''
      }`}>
        {/* Logo with blur - Left side */}
        <Link href="/" className="font-display text-lg sm:text-xl font-bold text-foreground flex-shrink-0 backdrop-blur-sm bg-background/30 px-3 py-1.5 rounded-md">
          A<span className="text-primary">rnas</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              className="text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {/* Language Toggle */}
          <Button
            onClick={(e) => {
              e.stopPropagation();
              markLanguageChangeAsUserInitiated();
              // Start blackout immediately, change language after 0.5s
              setTimeout(() => {
                setLanguage(language === 'lt' ? 'en' : 'lt');
              }, 500);
            }}
            className="rounded-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 min-h-[36px] lg:min-h-[40px]"
          >
            {language === 'lt' ? 'EN' : 'LT'}
          </Button>

          {/* CTA Button */}
          <Button
            asChild
            className="rounded-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 min-h-[36px] lg:min-h-[40px]"
          >
            <Link href="/book-call">{t('nav.bookCall')}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button - Right Side */}
        <button
          className="md:hidden text-foreground p-2 min-w-[44px] min-h-[44px] flex items-center justify-center absolute right-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full Width Top */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="md:hidden fixed top-0 left-0 right-0 w-full backdrop-blur-md bg-background/95 border-b border-border/50 p-4 sm:p-6 z-50"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold">
              {language === 'lt' ? 'Meniu' : 'Menu'}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-10 w-10"
            >
              <X size={20} />
            </Button>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2 text-base min-h-[44px] flex items-center"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-border">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  markLanguageChangeAsUserInitiated();
                  // Start blackout immediately, change language after 0.5s
                  setTimeout(() => {
                    setLanguage(language === 'lt' ? 'en' : 'lt');
                  }, 500);
                }}
                size="sm"
                className="rounded-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border flex-1 min-h-[44px]"
              >
                {language === 'lt' ? 'EN' : 'LT'}
              </Button>
              <Button
                asChild
                size="sm"
                className="rounded-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border flex-1 min-h-[44px]"
              >
                <Link href="/book-call">{t('nav.bookCall')}</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}