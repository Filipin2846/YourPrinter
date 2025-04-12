/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class', // Suporte para o modo escuro ativado pela classe "dark"
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Certifique-se de que suas páginas estão sendo observadas
    './components/**/*.{js,ts,jsx,tsx}', // Adicione seus componentes aqui
    './app/**/*.{js,ts,jsx,tsx}', // Incluindo o diretório app (caso esteja utilizando)
  ],
  safelist: [
    'bg-background', 'bg-card', 'bg-popover', 'bg-primary', 'bg-secondary', 'bg-muted', 'bg-accent',
    'text-foreground', 'text-primary-foreground', 'text-secondary-foreground', 'text-muted-foreground',
    'text-accent-foreground', 'text-popover-foreground', 'text-card-foreground',
    'border', 'border-border', 'border-input',
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
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans], // Adicionando fontes personalizadas
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Animações do Tailwind
  ],
};
