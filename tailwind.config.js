/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        primary: 'oklch(var(--primary) / <alpha-value>)',
        'primary-foreground': 'oklch(var(--primary-foreground) / <alpha-value>)',
        secondary: 'oklch(var(--secondary) / <alpha-value>)',
        'secondary-foreground': 'oklch(var(--secondary-foreground) / <alpha-value>)',
        muted: 'oklch(var(--muted) / <alpha-value>)',
        'muted-foreground': 'oklch(var(--muted-foreground) / <alpha-value>)',
        accent: 'oklch(var(--accent) / <alpha-value>)',
        'accent-foreground': 'oklch(var(--accent-foreground) / <alpha-value>)',
        popover: 'oklch(var(--popover) / <alpha-value>)',
        'popover-foreground': 'oklch(var(--popover-foreground) / <alpha-value>)',
        card: 'oklch(var(--card) / <alpha-value>)',
        'card-foreground': 'oklch(var(--card-foreground) / <alpha-value>)',
        input: 'oklch(var(--input) / <alpha-value>)',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        border: 'oklch(var(--border) / <alpha-value>)',
      },
      backgroundColor: theme => ({
        background: theme('colors.background'),
        card: theme('colors.card'),
        popover: theme('colors.popover'),
        primary: theme('colors.primary'),
        secondary: theme('colors.secondary'),
        muted: theme('colors.muted'),
        accent: theme('colors.accent'),
      }),
      textColor: theme => ({
        foreground: theme('colors.foreground'),
        'primary-foreground': theme('colors.primary-foreground'),
        'secondary-foreground': theme('colors.secondary-foreground'),
        'muted-foreground': theme('colors.muted-foreground'),
        'accent-foreground': theme('colors.accent-foreground'),
        'popover-foreground': theme('colors.popover-foreground'),
        'card-foreground': theme('colors.card-foreground'),
      }),
      borderColor: theme => ({
        DEFAULT: theme('colors.border'),
        border: theme('colors.border'),
        input: theme('colors.input'),
      }),
      outlineColor: theme => ({
        ring: theme('colors.ring'),
      }),
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
