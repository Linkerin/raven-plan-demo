import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
// export default defineConfig({
//   base: '/raven-plan-demo/',
//   plugins: [react()]
// });

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/'
  };

  if (command !== 'serve') {
    config.base = '/raven-plan-demo/';
  }

  return config;
});
