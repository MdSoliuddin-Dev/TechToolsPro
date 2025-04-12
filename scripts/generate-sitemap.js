// scripts/generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/tools/merge-pdf', changefreq: 'monthly', priority: 0.8 },
  { url: '/tools/split-pdf', changefreq: 'monthly', priority: 0.8 },
  // Add more tools here
];

const sitemap = new SitemapStream({ hostname: 'https://techtoolspro.com' });

const writeStream = createWriteStream(resolve('dist', 'sitemap.xml'));
streamToPromise(sitemap.pipe(writeStream)).then(() => {
  console.log('✅ Sitemap generated at dist/sitemap.xml');
});

links.forEach(link => sitemap.write(link));
sitemap.end();
