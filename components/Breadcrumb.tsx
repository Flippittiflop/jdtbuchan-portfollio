"use client"

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useBreadcrumb } from '@/hooks/useBreadcrumb';

export default function Breadcrumb() {
  const breadcrumbs = useBreadcrumb();

  return (
    <nav aria-label="Breadcrumb" className="py-4">
        {breadcrumbs.length > 1 && (
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={breadcrumb.path} className="flex items-center">
                        {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
                        {index === breadcrumbs.length - 1 ? (
                            <span className="font-medium text-gray-900">{breadcrumb.label}</span>
                        ) : (
                            <Link href={breadcrumb.path} className="hover:text-gray-700">
                                {breadcrumb.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        )}
    </nav>
  );
}
