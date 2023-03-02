/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    
    extend: {
      colors: {
        DarkBlueIntroAndEmail: 'hsl(217, 28%, 15%)',
        DarkBlueFooterBackground: 'hsl(216, 53%, 9%)',
        DarkBlueMainBackground: 'hsl(218, 28%, 13%)',
        DarkBlueFooterBackground: 'hsl(216, 53%, 9%)',
        DarkBlueFooterBackground: 'hsl(216, 53%, 9%)',
        DarkBlueTestimonialsBackground: 'hsl(219, 30%, 18%)',
        CyanGradient: 'hsl(176, 68%, 64%)',
        BlueGradient: 'hsl(198, 60%, 50%)',
        LightRedError: 'hsl(0, 100%, 63%)',
        White: 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        'bgWavesMovile': "url('./src/assets/images/bg-curvy-mobile.svg')",
        'bgWavesDesktop': "url('./src/assets/images/bg-curvy-desktop.svg')",
      },
      fontFamily: {
        'OpenSans':['Open Sans', 'sans-serif'],
        'Raleway': ['Raleway', 'sans-serif'],

      },
    },
  },
  
  plugins: [],
}
