/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "bg-1": "#064E3B",
          "bg-gray": "#555",
          "text-grey-1": "#333",
          "step-color": "#E1A313",
          "btn-color": "#047857",
          "heading-color": " #e1a313",
        },
      },
    },
    plugins: [],
  },
};
