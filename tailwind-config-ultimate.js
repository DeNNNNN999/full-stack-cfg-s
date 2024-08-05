const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // Расширенный список путей для поиска классов Tailwind
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue,svelte,astro}',
    './pages/**/*.{js,jsx,ts,tsx,vue,svelte,astro}',
    './components/**/*.{js,jsx,ts,tsx,vue,svelte,astro}',
    './layouts/**/*.{js,jsx,ts,tsx,vue,svelte,astro}',
    './plugins/**/*.{js,ts}',
    './content/**/*.{md,mdx}',
    './public/**/*.html',
  ],
  
  // Поддержка тёмного режима
  darkMode: 'class',
  
  theme: {
    // Расширение существующей темы
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8',
          500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e',
        },
        secondary: colors.gray,
        accent: colors.amber,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red,
        info: colors.blue,
        // Градиентные цвета
        'gradient-1': 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
        'gradient-2': 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
        'gradient-3': 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
        handwriting: ['Caveat', 'cursive'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xs': ['0.5rem', { lineHeight: '0.625rem' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        'screen-10': '10vh',
        'screen-20': '20vh',
        'screen-30': '30vh',
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.100') },
            h3: { color: theme('colors.gray.100') },
            h4: { color: theme('colors.gray.100') },
            code: { color: theme('colors.gray.300') },
            blockquote: { color: theme('colors.gray.400') },
            strong: { color: theme('colors.gray.300') },
          },
        },
      }),
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'outer-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width': 'width',
        'fadetransform': 'opacity, transform',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
      scale: {
        '175': '1.75',
        '200': '2',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      cursor: {
        'grab': 'grab',
        'grabbing': 'grabbing',
      },
    },
    // Кастомные брейкпоинты
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
      '2xl': '1400px',
      '3xl': '1600px',
      '4xl': '1800px',
    },
  },
  
  variants: {
    extend: {
      backgroundColor: ['active', 'group-focus', 'even', 'odd', 'disabled'],
      textColor: ['visited', 'group-focus', 'active', 'disabled'],
      opacity: ['disabled', 'group-hover'],
      cursor: ['disabled', 'hover'],
      borderWidth: ['hover', 'focus', 'group-hover'],
      scale: ['group-hover', 'active'],
      transform: ['group-hover'],
      translate: ['group-hover', 'group-focus'],
      boxShadow: ['active', 'group-hover'],
      grayscale: ['hover', 'focus'],
      backdropFilter: ['hover', 'focus'],
      aspectRatio: ['hover', 'group-hover'],
    },
  },
  
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-children'),
    require('tailwindcss-gradients'),
    require('tailwindcss-heropatterns')({
      patterns: ['topography', 'circuit-board'],
      colors: {
        default: '#9C92AC',
        'blue-dark': '#000B1C',
      },
      opacity: {
        default: '0.4',
        '100': '1.0',
      },
    }),
    require('tailwindcss-textshadow'),
    require('tailwindcss-animate'),
    require('tailwindcss-flip'),
    require('tailwindcss-elevation')(['responsive']),
    require('tailwindcss-blend-mode')(),
    require('tailwindcss-border-gradients')(),
    plugin(function({ addUtilities, theme, variants }) {
      const newUtilities = {
        '.bg-gradient-primary': {
          backgroundImage: `linear-gradient(to right, ${theme('colors.primary.400')}, ${theme('colors.primary.600')})`,
        },
        '.text-gradient-primary': {
          backgroundClip: 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          backgroundImage: `linear-gradient(to right, ${theme('colors.primary.400')}, ${theme('colors.primary.600')})`,
        },
        '.bg-noise': {
          backgroundImage: 'url("/images/noise.png")',
          backgroundRepeat: 'repeat',
        },
        '.backdrop-blur-xs': {
          backdropFilter: 'blur(2px)',
        },
        '.backdrop-blur-2xl': {
          backdropFilter: 'blur(40px)',
        },
        '.isolate': {
          isolation: 'isolate',
        },
      }
      addUtilities(newUtilities, variants('backgroundImage'))
    }),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl') },
        'h2': { fontSize: theme('fontSize.3xl') },
        'h3': { fontSize: theme('fontSize.2xl') },
        'h4': { fontSize: theme('fontSize.xl') },
        'h5': { fontSize: theme('fontSize.lg') },
        'h6': { fontSize: theme('fontSize.base') },
      })
    }),
    plugin(function({ addComponents, theme }) {
      const buttons = {
        '.btn': {
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.600'),
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 3px ${theme('colors.primary.300')}`,
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.primary.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.primary.600'),
          },
        },
      }
      addComponents(buttons)
    }),
  ],
  
  corePlugins: {
    float: false,
    objectFit: false,
    objectPosition: false,
  },
  
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{js,jsx,ts,tsx,vue,svelte,astro}',
      './pages/**/*.{js,jsx,ts,tsx,vue,svelte,astro}',
      './components/**/*.{js,jsx,ts,tsx,vue,svelte,astro}',
      './layouts/**/*.{js,jsx,ts,tsx,vue,svelte,astro}',
      './plugins/**/*.{js,ts}',
      './content/**/*.{md,mdx}',
      './public/**/*.html',
    ],
    options: {
      safelist: [/^data-theme$/],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
      variables: true,
      rejected: true,
      extractors: [
        {
          extractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ['vue', 'js', 'jsx', 'ts', 'tsx', 'html', 'astro', 'svelte'],
        },
      ],
    },
  },
  
  mode: 'jit',
  
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    hoverOnlyWhenSupported: true,
    disableColorOpacityUtilitiesByDefault: true,
    respectDefaultRingColorOpacity: true,
  },
};
