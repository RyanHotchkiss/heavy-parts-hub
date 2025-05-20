import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const url = 'https://www.boschautoparts.com/products';
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });
    const html = await res.text();
    const $ = cheerio.load(html);

    // Find the dropdown <select> for years
    const years = [];
    $('select#year option').each((_, el) => {
      const val = $(el).attr('value');
      if (val && val !== 'Select Year') years.push(val);
    });

    return NextResponse.json({ years });
  } catch (err) {
    console.error('SCRAPE ERROR:', err);
    return NextResponse.json({ error: 'Scrape failed' }, { status: 500 });
  }
}