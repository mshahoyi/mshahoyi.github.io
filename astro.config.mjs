import { defineConfig } from 'astro/config';

// User page (mshahoyi.github.io) served from the repo root, so base is '/'.
// Build into docs/ so GitHub Pages keeps serving from the docs folder.
export default defineConfig({
  site: 'https://mshahoyi.github.io',
  outDir: './docs',
  // Dev-only: allow reaching the dev server over Tailscale by MagicDNS name
  // (e.g. http://contabo:4321) instead of the raw tailnet IP. Vite blocks
  // unknown Host headers by default; these are private tailnet names only.
  server: {
    allowedHosts: ['contabo', 'contabo.tail8aa1cf.ts.net'],
  },
});
