import { mkdir, rm, cp } from 'node:fs/promises';
const files = ['assets', 'en', 'da', 'index.html', '404.html', 'CNAME', '.nojekyll', 'robots.txt', 'sitemap.xml', 'palette-preview.html'];
await rm('dist', { recursive: true, force: true });
await mkdir('dist');
for (const file of files) await cp(file, `dist/${file}`, { recursive: true });
console.log('Built website in dist/');
