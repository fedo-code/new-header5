const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'text-[25px]',
    'text-[14px]',
    'text-[16px]',
    'w-[115px]',
    'h-[14px]',
    'leading-[117%]',
    'leading-[140%]',
    'tracking-[0%]',
    'text-[#161B22]',
    // logo fixed size classes
    'w-[10px]',
    'h-[11px]',
    'min-w-[10px]',
    'min-h-[11px]',
    'max-w-[10px]',
    'max-h-[11px]',
  ],
  theme: {
    extend: {
      screens: {
        'btn-sm': { min: '1024px', max: '1065px' },
      },
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
