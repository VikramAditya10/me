import { defineConfig } from 'vitest/config';

export default defineConfig({
  define: { __RESUME_AVAILABLE__: true },
  test: { environment: 'jsdom', setupFiles: ['./src/test/setup.ts'] },
});
