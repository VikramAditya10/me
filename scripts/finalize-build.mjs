import { build } from 'vite';
import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import sharp from 'sharp';

// Pre-render the same React tree used by the client: readable HTML for crawlers,
// fast first paint, and full project text when JavaScript is disabled.
await build({
  publicDir: false,
  build: { ssr: 'src/prerender.tsx', outDir: '.preview/ssr', emptyOutDir: true },
});
const { render } = await import('../.preview/ssr/prerender.js');
const html = await readFile('dist/index.html', 'utf8');
if (!html.includes('<!--app-html-->')) throw new Error('Missing pre-render placeholder');
await writeFile('dist/index.html', html.replace('<!--app-html-->', () => render()));
const resume = 'Vikram_Aditya_AI_Fintech_Resume.pdf';
if (existsSync(resume)) await copyFile(resume, `dist/${resume}`);
await sharp('public/social-preview.svg').png().toFile('dist/social-preview.png');
await writeFile('dist/.nojekyll', '');
console.log('Pre-rendered portfolio, social preview, and available resume packaged in dist/.');
