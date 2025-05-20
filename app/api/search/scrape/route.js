const html = await res.text();
const $ = cheerio.load(html);

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