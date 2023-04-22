/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    primary: "#f9a1bc",
    secondary: "#ecc94b",
    extend: {},
    fontFamily: {
      sans: ["Libre Franklin, sans-serif"],
      serif: ["'Merriweather', serif"],
      mono: ["ui-monospace"],
      display: ["'Libre Franklin', sans-serif"],
      body: ["'Libre Franklin', sans-serif"],
    },
  },
  daisyui: {
    themes: [
      {
        volkskrant: {
          primary: "#f472b6",

          secondary: "#111827",

          accent: "#38bdf8",

          neutral: "#f3f4f6",

          "base-100": "#f3f4f6",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
};
