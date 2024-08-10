/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Example custom colors
        'gradient-start': '#FF0081',
        'gradient-middle': '#D33277',
        'gradient-end': '#6A1B9A',
      },
      screens: {
        'sm': '640px',    // Small devices (mobile)
        'md': '768px',    // Medium devices (tablet)
        'lg': '1024px',   // Large devices (desktop)
        'xl': '1280px',   // Extra large devices (large desktop)
        '2xl': '1536px',  // 2x Extra large devices (larger desktop)
        // Custom breakpoints can be added here
        'xxl': '1920px',  // Example of a custom breakpoint
      },
      fontSize: {
        'tiny': '16px',  // Example size
        'small': '18px', // Example size
        'base': '21px',      // Example size
        'large': '24px', // Example size
        'xlarge': '1.25rem', // Example size
        'xxlarge': '1.5rem', // Example size
        'huge': '2rem',      // Example size
        'larger': '3rem',    // Example size
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        good : ['Good Times W00 Heavy']
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-gradient': {
            background: 'linear-gradient(90deg, var(--tw-gradient-stops))',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            'background-clip': 'text',
            'text-fill-color': 'transparent',
          },
          '.gradient-from': {
            '--tw-gradient-from': 'var(--tw-gradient-from)',
            '--tw-gradient-to': 'var(--tw-gradient-to)',
            '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0))',
            'background': 'linear-gradient(var(--tw-gradient-stops))',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            'background-clip': 'text',
            'text-fill-color': 'transparent',
          },
        },
        ['responsive', 'hover']
      );
    }
  ],
}