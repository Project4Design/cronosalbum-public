import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

const htmlPlugin = (env) => ({
  name: 'html-transform',
  transformIndexHtml(html) {
    let newHtml = html.replace(/<title>(.*?)<\/title>/, `<title>${env.VITE_APP_TITLE}</title>`);

    if (env.VITE_APP_DESCRIPTION) {
      const description = env.VITE_APP_DESCRIPTION;
      newHtml = newHtml.replace(
        /<meta name="description" content="(.*?)">/,
        `<meta name="description" content="${description}">`
      );
    }

    return newHtml;
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue(), htmlPlugin(loadEnv(mode, '.'))],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}));
