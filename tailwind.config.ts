const config = {
  content: [
    
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'text-[1.5625rem]',
    'text-[0.875rem]',
    'text-[1rem]',
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
      fontFamily: {
        
        georgia: ['Georgia', 'serif'],

         inter: ["var(--font-inter)", "system-ui", "sans-serif"],
         "roboto-condensed": ["var(--font-roboto-condensed)", "sans-serif"],
         "host-grotesk": ["var(--font-host-grotesk)"],
      },

      
      screens: {
        'btn-sm': { min: '1024px', max: '1065px' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
