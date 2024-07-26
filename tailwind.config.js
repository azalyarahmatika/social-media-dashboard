/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'lime_green': 'hsl(163, 72%, 41%)',
        'bright_red': 'hsl(356, 69%, 56%)',
        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'instagram_from': 'hsl(37, 97%, 70%)',
        'instagram_to': 'hsl(329, 70%, 58%)',
        'youtube': 'hsl(348, 97%, 39%)',
        'toggle_from': 'hsl(210, 78%, 56%)',
        'toggle_to': 'hsl(146, 68%, 55%)',
        'toggle': 'hsl(230, 22%, 74%)',
        'very_dark_blue_bg': 'hsl(230, 17%, 14%)',
        'very_dark_blue_top_bg_pattern': 'hsl(232, 19%, 15%)',
        'dark_desaturated_blue_card_bg': 'hsl(228, 28%, 20%)',
        'desaturated_blue_text': 'hsl(228, 34%, 66%)',
        'white_text': 'hsl(0, 0%, 100%)',
        'white_bg': 'hsl(0, 0%, 100%)',
        'very_pale_blue_top_bg_pattern': 'hsl(225, 100%, 98%)',
        'light_grayish_blue_card_bg': 'hsl(227, 47%, 96%)',
        'dark_grayish_blue_text': 'hsl(228, 12%, 44%)',
        'very_dark_blue_text': 'hsl(230, 17%, 14%)',
      },
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      }
    },
  },
  safelist: [
    'lime_green',
    'bright_red'
  ],
  plugins: [],
};
