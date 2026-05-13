import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/** Základ bez koncového lomítka na proxy target. */
function trimBaseUrl(url: string): string {
  return url.replace(/\/+$/, '');
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['VITE_', 'PUBLIC_']);
  const cmsBaseRaw = env.VITE_PUBLIC_CMS_API_URL ?? env.PUBLIC_CMS_API_URL ?? '';
  const cmsTarget = trimBaseUrl(String(cmsBaseRaw).trim());

  return {
    plugins: [react()],
    // Umožní i PUBLIC_* proměnné vedle VITE_* (viz dokumentace projektu).
    envPrefix: ['VITE_', 'PUBLIC_'],
    server:
      cmsTarget ?
        {
          proxy: {
            '/api': {
              target: cmsTarget,
              changeOrigin: true,
            },
          },
        }
      : {},
  };
});
