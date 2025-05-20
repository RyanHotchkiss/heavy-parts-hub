import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch'; // Not needed in newer Node, but included for safety

export async function POST(req) {
  try {
    const { make, model, year, part, condition } = await req.json();

    // 1. Build the FCP Euro URL
    const baseUrl = 'https://www.fcpeuro.com';
    const queryParams = new URLSearchParams({
      year,
      quality_name: condition.toUpperCase(), // e.g., OEM, GENUINE
    });

    const partUrl = `${baseUrl}/${capitalize(make)}-parts/${titleCaseSlug(model)}/${part.toLowerCase()}/?${queryParams}`;
    // 2. Fetch the HTML
    const html = await fetch(partUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/113.0.0.0 Safari/537.36',
      },
    }).then(res => res.text());
    const $ = cheerio.load(html);

    // 3. Scrape first 3 products
    const results = [];
    $('.product-listing').slice(0, 3).each((_, el) => {
      const title = $(el).find('.product-title').text().trim();
      const price = $(el).find('.product-price .price').text().trim();
      const image = $(el).find('img.product-img').attr('src') || '';
      results.push({
        title,
        price,
        image: image.startsWith('http') ? image : `${baseUrl}${image}`,
        source: 'FCP Euro',
        buyUrl: `${baseUrl}${$(el).find('.product-title a').attr('href')}`,
      });
    });

    return NextResponse.json({ results });
  } catch (err) {
    console.error('SCRAPE ERROR:', err);
    return NextResponse.json({ error: 'Scrape failed' }, { status: 500 });
  }
}

// ----------- 🔧 Helpers ----------
function slugify(str = '') {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('-')
      .replace(/[^\w-]/g, '');
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