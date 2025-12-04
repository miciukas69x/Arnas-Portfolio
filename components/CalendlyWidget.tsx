"use client";

import Script from 'next/script';

interface CalendlyWidgetProps {
  url: string;
  className?: string;
}

export default function CalendlyWidget({ url, className = '' }: CalendlyWidgetProps) {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className={`calendly-inline-widget ${className}`}
        data-url={url}
        style={{ minWidth: '320px', height: '700px', width: '100%' }}
      />
    </>
  );
}

