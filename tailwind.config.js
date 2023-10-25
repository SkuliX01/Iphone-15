/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        scaleIs: {
          'from': { scale : '1'},
          'to': { scale : '1.1'}
        },
        scaleOutIs: {
          'from': { scale : '1.1'},
          'to': { scale : '1'}
        },
        scaleIcon: {
          'from': { scale: '1'},
          'to': {scale : '1.08'}
        },
        scaleOutIcon: {
          'from': { scale: '1.08'},
          'to': {scale : '1'}
        }
      },
      animation: {
        'scaleIs': 'scaleIs 0.3s forwards',
        'scaleOutIs': 'scaleOutIs 0.3s backwards',
        'scaleIcon': 'scaleIcon 0.3s forwards',
        'scaleOutIcon': 'scaleOutIcon 0.3s backwards'
      }
    }
  },
  plugins: []
};