/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          sidebar: '#131314',     // Darkest (Left Sidebar)
          bg: '#1e1e1e',          // Medium (Main Content)
          card: '#2b2c2f',        // Lightest gray (Input boxes)
          border: '#444746',      // Studio border color
          blue: '#8ab4f8',        // Primary Google Blue
          text: '#e3e3e3',        // Primary text
          muted: '#8e918f',       // Secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
};
