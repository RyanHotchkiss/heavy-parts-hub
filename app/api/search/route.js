import { NextResponse } from 'next/server';
import inventory from '@/data/inventory.json';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const make = searchParams.get('make');
  const model = searchParams.get('model');
  const year = searchParams.get('year');
  const category = searchParams.get('category');
  const part = searchParams.get('part');
  const condition = searchParams.get('condition');

  const filtered = inventory.filter(item =>
    item.make === make &&
    item.model === model &&
    item.year === year &&
    item.category === category &&
    item.part === part &&
    item.condition === condition
  );

  return NextResponse.json(filtered);
}