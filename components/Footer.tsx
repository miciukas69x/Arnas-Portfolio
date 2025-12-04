"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Email */}
          <a
            href="mailto:info@arnas.lt"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            info@arnas.lt
          </a>

          {/* Center */}
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            {t('footer.rights')}, ©2025
          </p>
        </div>
      </div>
    </footer>
  );
}