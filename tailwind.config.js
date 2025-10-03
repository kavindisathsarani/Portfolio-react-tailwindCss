// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       animation: {
//         'fade-in': 'fadeIn 0.6s ease-in',
//         'slide-up': 'slideUp 0.6s ease-out',
//         'slide-in': 'slideIn 0.6s ease-out',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//         slideIn: {
//           '0%': { transform: 'translateX(-20px)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };



// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       animation: {
//         'fade-in': 'fadeIn 0.6s ease-in',
//         'slide-up': 'slideUp 0.6s ease-out',
//         'slide-in': 'slideIn 0.6s ease-out',
//         'float': 'float 5s ease-in-out infinite',
//         'gradient-x': 'gradient-x 3s ease infinite',
//         'typewriter': 'typewriter 0.1s forwards',
//         'bounce-slow': 'bounce 2s infinite',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//         slideIn: {
//           '0%': { transform: 'translateX(-20px)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
//           '50%': { transform: 'translateY(-20px) rotate(180deg)' },
//         },
//         'gradient-x': {
//           '0%, 100%': { 
//             'background-position': '0% 50%',
//             'background-size': '200% 200%'
//           },
//           '50%': { 
//             'background-position': '100% 50%',
//             'background-size': '200% 200%'
//           },
//         },
//         typewriter: {
//           'from': { opacity: '0' },
//           'to': { opacity: '1' },
//         },
//         bounce: {
//           '0%, 100%': { 
//             transform: 'translateY(0)',
//             animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
//           },
//           '50%': { 
//             transform: 'translateY(-25%)',
//             animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
//           },
//         },
//       },
//       // Adding animation delays for staggered effects
//       transitionDelay: {
//         '300': '300ms',
//         '500': '500ms',
//         '700': '700ms',
//       },
//       // Extending background image for gradients
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'float': 'float 5s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'typewriter': 'typewriter 0.1s forwards',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'gradient-x': {
          '0%, 100%': { 
            'background-position': '0% 50%',
          },
          '50%': { 
            'background-position': '100% 50%',
          },
        },
        typewriter: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { 
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      // Adding animation delays for staggered effects
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
      },
      // Extending background image for gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Adding background size
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
};