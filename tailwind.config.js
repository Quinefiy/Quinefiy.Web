 /** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
              roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
              primaryRed: '#C00303',
            },
            backdropBlur: {
              custom: '5.33px',
            },
            boxShadow: {
              'inset-dual': 'inset -2.67px 2.67px 2.67px #FFFFFF22, inset 2.67px -2.67px 2.67px #A5A5A522',
            },
            keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 20s linear infinite',
      },
          },
    },
    plugins: [require('@tailwindcss/line-clamp')],
  } 