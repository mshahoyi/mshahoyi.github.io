import { defineConfig } from 'astro/config';

// User page (mshahoyi.github.io) served from the repo root, so base is '/'.
// Build into docs/ so GitHub Pages keeps serving from the docs folder.
export default defineConfig({
  site: 'https://mshahoyi.github.io',
  outDir: './docs',
});
