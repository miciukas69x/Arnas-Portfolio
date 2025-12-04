"use client";

import { getServiceById } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function CreativeServicePage() {
  const service = getServiceById('creative');

  if (!service) {
    return null;
  }

  return (
    <ServicePageTemplate service={service} />
  );
}



