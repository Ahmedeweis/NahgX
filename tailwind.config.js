// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      colors: {
        medical: {
          navy: '#0B3D91',
          'navy-dark': '#062A6B',
          'navy-deep': '#082C70',
          blue: '#0E74C8',
          'blue-light': '#4DB8FF',
          sky: '#E8F3FF',
          'sky-light': '#F4F9FE',
          'accent-light': '#2AA7E6',
        },
        primary: {
          DEFAULT: '#0E3A6C',
          50: '#e6f7f6',
          100: '#cfeff0'
        },
        'brand-dark': '#002D2D',
        'brand-primary': '#3AE079',
        'brand-light': '#F2F4F5',
        'brand-text': '#4A6581',
        accent: '#3AE079',
        bg: '#0f1724',
        card: '#121826',
        'nuvica-navy': '#0E3A6C',
        'nuvica-green': '#3AE079',
        'nuvica-gray': '#4A6581',
        'nuvica-bg-start': '#CBE0F2',
        'nuvica-bg-end': '#FFFFFF',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      },
      boxShadow: {
        'card-lg': '0 25px 60px -15px rgba(11, 61, 145, 0.25)',
        'card-md': '0 18px 45px -12px rgba(11, 61, 145, 0.18)',
        'nav': '0 2px 20px rgba(11, 61, 145, 0.08)',
      }
    },
  },
  plugins: [],
}