'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = [];
  let path = '';

  const labelOverrides = {
    category: 'Categories',
    cars: 'Cars',
    make: 'Make',
    models: 'Models',
    years: 'Years',
    parts: 'Parts',
  };

  segments.forEach((seg, index) => {
    const label = labelOverrides[seg] || seg.charAt(0).toUpperCase() + seg.replace(/-/g, ' ').slice(1);
    const isLast = index === segments.length - 1;

    path += '/' + seg;

    const make = segments[3];
    const model = segments[5];
    const year = segments[7];

    let customHref = null;
    if (seg === 'make') {
      customHref = '/category/cars';
    } else if (seg === 'years') {
      customHref = `/category/cars/make/${make}/models/${model}`;
    } else if (seg === 'parts') {
      customHref = `/category/cars/make/${make}/models/${model}/years/${year}`;
    }

    const neverLink = ['cars', make, model, year, segments[9], segments[11]];

    crumbs.push(
      <span key={seg}>
        {index > 0 && ' / '}
        {seg === 'category' ? (
          <Link href="/" className="text-blue-600 hover:underline">Categories</Link>
        ) : customHref && !isLast ? (
          <Link href={customHref} className="text-blue-600 hover:underline">{label}</Link>
        ) : !isLast && !neverLink.includes(seg) ? (
          <Link href={path} className="text-blue-600 hover:underline">{label}</Link>
        ) : (
          label
        )}
      </span>
    );
  });

  return (
    <nav style={{ marginBottom: '1rem' }}>
      {crumbs}
    </nav>
  );
}