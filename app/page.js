'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const categories = [
  { name: 'Cars', emoji: '🚗' },
  { name: 'Pickups', emoji: '🛻' },
  { name: 'Trucks', emoji: '🚚' },
  { name: 'Heavy Equipment', emoji: '🏗️' },
  { name: 'Farm Equipment', emoji: '🚜' },
  { name: 'Motorcycles', emoji: '🏍️' },
  { name: 'UTVs / ATVs', emoji: '🛺' },
  { name: 'Browse by Make & Model', emoji: '🔍' }
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();

  const filtered = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={dark ? 'bg-black text-white min-h-screen p-6' : 'bg-white text-black min-h-screen p-6'}>
      <button
        onClick={() => setDark(!dark)}
        className="mb-6 px-4 py-2 border rounded hover:bg-gray-700 dark:hover:bg-gray-200 dark:text-black"
      >
        Toggle {dark ? 'Light' : 'Dark'} Mode
      </button>

      <h1 className="text-3xl font-bold text-center mb-4">Find Your Parts</h1>

      <input
        type="text"
        placeholder="Search categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`w-full max-w-md mx-auto mb-8 px-4 py-2 rounded border 
          ${dark ? 'bg-zinc-800 text-white border-zinc-600' : 'bg-zinc-100 text-black border-zinc-300'}`}
      />

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((cat) => (
            <div
              key={cat.name}
              onClick={() =>
                router.push(
                  `/category/${cat.name
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/\//g, '-')         // handle slashes
                    .replace(/[()]/g, '')        // remove parentheses
                    .replace(/-+/g, '-')         // collapse multiple dashes
                    .trim()}`
                )
              }
              className={`rounded-xl shadow p-6 hover:scale-105 transition transform cursor-pointer text-center ${
                dark ? 'bg-zinc-800 text-white' : 'bg-zinc-100 text-black'
              }`}
            >
              <div className="text-4xl mb-2">{cat.emoji}</div>
              <div className="text-xl font-semibold">{cat.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">No categories match your search.</p>
      )}
    </div>
  );
}