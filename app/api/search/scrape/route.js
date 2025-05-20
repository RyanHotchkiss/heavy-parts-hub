import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

export async function POST(req) {
  try {
    const { make, model, year, part, condition } = await req.json();

    const baseUrl = 'https://www.fcpeuro.com';
    const queryParams = new URLSearchParams({
      year,
      quality_name: condition.toUpperCase(),
    });

    const partUrl = `${baseUrl}/${capitalize(make)}-parts/${titleCaseSlug(model)}/${part.toLowerCase()}/?${queryParams}`;

    const res = await fetch(partUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });

    const html = await res.text();

    // 👇 Return raw HTML snippet for debugging
    return NextResponse.json({ debug: html.slice(0, 1000) });

  } catch (err) {
    console.error('SCRAPE ERROR:', err);
    return NextResponse.json({ error: 'Scrape failed' }, { status: 500 });
  }
}

function capitalize(str = '') {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function titleCaseSlug(str = '') {
  return str
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('-');
}