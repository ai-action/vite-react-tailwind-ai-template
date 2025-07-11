import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

/**
 * @see {@link https://vitejs.dev/config/}
 */
export default defineConfig({
  base: process.env.BASE || '',
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
});
