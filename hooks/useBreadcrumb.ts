"use client"

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const breadcrumbMap: { [key: string]: string } = {
  'journey': 'My Journey',
  'experiences': 'Experiences',
  'rmb': 'Started Coding',
  'projects': 'My Projects',
  'klara': 'Klara E-commerce',
  // Add more mappings as needed
};

export function useBreadcrumb() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    const pathSegments = pathname.split('/').filter(segment => segment);
    const breadcrumbItems: BreadcrumbItem[] = pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      return {
        label: breadcrumbMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
        path,
      };
    });

    setBreadcrumbs([{ label: 'Home', path: '/' }, ...breadcrumbItems]);
  }, [pathname]);

  return breadcrumbs;
}