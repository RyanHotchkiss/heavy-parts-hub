'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function PartDetailPage({ params }) {
  const { make, model, year, category, part } = params;
  const [condition, setCondition] = useState(null);
  const [results, setResults] = useState([]);

  const fetchResults = async (selectedCondition) => {
    setCondition(selectedCondition);
  
    const query = new URLSearchParams({
      make,
      model,
      year,
      category,
      part,
      condition: selectedCondition
    });
  
    const res = await fetch(`/api/search?${query}`);
    const data = await res.json();
    setResults(data);
  };

  const conditionOptions = [
    { label: 'New – OEM (Original Equipment Manufacturer)', value: 'oem' },
    { label: 'Rebuilt / Refurbished', value: 'refurbished' },
    { label: 'New – Aftermarket / Generic', value: 'generic' }
  ];

  return (
    <div className="p-6">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-4">{make.toUpperCase()} {model.toUpperCase()} ({year})</h1>
      <h2 className="text-xl mb-2">Category: {category}</h2>
      <h3 className="text-lg mb-4">Part: {part}</h3>

      <div className="flex gap-4 mb-6 flex-wrap">
        {conditionOptions.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => fetchResults(value)}
            className={`px-4 py-2 rounded border ${
              condition === value ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div>
        {condition && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Showing results for: {condition}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {results.map((item, i) => (
                    <div key={i} className="border rounded shadow p-4 bg-white">
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <img src={item.image || '/placeholder.jpg'} alt={item.title} className="w-full h-32 object-cover mb-2 rounded" />
                    <p className="text-gray-700 mb-2">${item.price}</p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        View Details
                    </button>
                    </div>
                ))}
                </div>
          </div>
        )}
      </div>
    </div>
  );
}