/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",   // ✅ Scan *all* files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        // Default sans-serif font (matches Studio look)
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        // Monospace font for code/editor areas
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
};
