
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1E6FD9' },
        secondary: { DEFAULT: '#2BB673' },
        accent: { DEFAULT: '#F5C542' },
        neutral: { DEFAULT: '#1F2937' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'Inter', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
