'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function SelectYear({ params }) {
  const { make, model } = params;

  // Group years into decades
  const decades = {};
  for (let year = 2025; year >= 1950; year--) {
    const decade = Math.floor(year / 10) * 10;
    if (!decades[decade]) decades[decade] = [];
    decades[decade].push(year);
  }

  return (
    <div style={{ padding: '2rem' }}>
        <Breadcrumbs/>
      <h1>Select Year for {make.toUpperCase()} {model.toUpperCase()}</h1>
      {Object.keys(decades).sort((a, b) => b - a).map((decade) => (
        <div key={decade}>
          <h2>{decade}s</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {decades[decade].map((year) => (
              <Link
                key={year}
                href={`/category/cars/make/${make}/models/${model}/years/${year}`}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#eee',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: '#000',
                }}
              >
                {year}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}