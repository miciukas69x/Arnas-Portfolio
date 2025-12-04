"use client";

import { getServiceById } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function BrandingServicePage() {
  const service = getServiceById('branding');

  if (!service) {
    return null;
  }

  return (
    <ServicePageTemplate service={service} />
  );
}
