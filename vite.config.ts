import { defineConfig } from 'vite';
import { existsSync } from 'node:fs';

export default defineConfig({
  base: '/me/',
  define: {
    __RESUME_AVAILABLE__: JSON.stringify(existsSync('Vikram_Aditya_AI_Fintech_Resume.pdf')),
  },
});
