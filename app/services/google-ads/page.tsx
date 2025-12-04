"use client";

import { getServiceById } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function GoogleAdsServicePage() {
  const service = getServiceById('google-ads');

  if (!service) {
    return null;
  }

  return (
    <ServicePageTemplate service={service} />
  );
}


