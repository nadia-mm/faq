import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, 
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',  // Path to setup file for testing environment
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],  // Patterns for test files
  },
})
