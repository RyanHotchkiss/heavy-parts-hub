'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';


const carMakes = [
    'Acura', 'Audi', 'Bentley', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler',
    'Citroën', 'Daewoo', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Genesis', 'Geo', 'Honda', 'Hummer',
    'Hyundai', 'Infiniti', 'Jaguar', 'Kia', 'Land_Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes', 'Mini',
    'Mitsubishi', 'Nissan', 'Oldsmobile', 'Peugeot', 'Pontiac', 'Porsche', 'Renault', 'Rolls-Royce', 'Saab', 'Saturn',
    'Scion', 'SEAT', 'Skoda', 'Smart', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'
  ];

export default function CarsCategoryPage() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const filteredMakes = carMakes.filter((make) =>
    make.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6">
     <Breadcrumbs/>
      <h1 className="text-3xl font-bold mb-4">Select a Make – Cars</h1>

      <input
        type="text"
        placeholder="Search makes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mb-6 px-4 py-2 border rounded text-black"
      />

      {filteredMakes.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredMakes.map((make) => (
            <div
              key={make}
              onClick={() =>
                router.push(`/category/cars/make/${make.toLowerCase().replace(/\s+/g, '-')}/models`)
              }
              className="cursor-pointer block p-4 rounded shadow bg-white dark:bg-zinc-800 hover:scale-105 transition text-center font-semibold"
            >
              {make}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-zinc-500">No makes found.</p>
      )}
    </div>
  );
}