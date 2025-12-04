"use client";

import { getServiceById } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function ConsultingServicePage() {
  const service = getServiceById('consulting');

  if (!service) {
    return null;
  }

  return (
    <ServicePageTemplate service={service} />
  );
}


