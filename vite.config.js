import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import open from 'open';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: false,
  },
  plugins: [
    react(),
    {
      name: 'custom-open',
      apply: 'serve',
      configureServer(server) {
        server.httpServer.once('listening', () => {
          const port = server.config.server.port || 3000;
          const protocol = server.config.server.https ? 'https' : 'http';
          const url = `${protocol}://localhost:${port}`;

          open(url, { app: { name: 'firefox' } });
        });
      },
    },
  ],
});
