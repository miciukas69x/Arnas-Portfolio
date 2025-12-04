"use client";

import { getServiceById } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function MetaAdsServicePage() {
  const service = getServiceById('meta-ads');

  if (!service) {
    return null;
  }

  return (
    <ServicePageTemplate service={service} />
  );
}



