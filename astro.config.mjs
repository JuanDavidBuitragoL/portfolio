// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // site: '#',
  // base: '/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon({
      // Esto permite que astro-icon busque en las colecciones de Iconify
      include: {
        mdi: ['*'],           
        'circle-flags': ['*'] 
      }
    })]
});