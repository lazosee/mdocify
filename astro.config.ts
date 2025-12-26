import markdoc from '@astrojs/markdoc';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ...
  integrations: [markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },
});