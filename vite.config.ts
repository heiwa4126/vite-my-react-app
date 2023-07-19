import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteMinifyPlugin({})],
  base: process.env.GITHUB_REPOSITORY?.split('/')[1] ?? './' // for GitHub Pages
});
