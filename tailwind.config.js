/** @type {import('tailwindcss').Config} */
export default {
  // Enables dark mode based on a 'dark' class on the html tag.
  darkMode: "class",

  // Tells Tailwind to scan your client-side files for class names.
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],

  // This is where your entire custom theme is defined.
  theme: {
    extend: {
      colors: {
        border: "hsl(201.4 30.4% 91.0%)",
        input: "hsl(200 23.1% 97.5%)",
        ring: "hsl(202.8 89.1% 53.1%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(210 25% 7.8%)",
        primary: {
          DEFAULT: "hsl(203.9 88.3% 53.1%)",
          // THE FIX IS HERE: Changed from white to your theme's dark color
          foreground: "hsl(210 25% 7.8%)", 
        },
        secondary: {
          DEFAULT: "hsl(210 25% 7.8%)",
          foreground: "hsl(210 25% 7.8%)",
        },
        destructive: {
          DEFAULT: "hsl(356.3 90.6% 54.3%)",
          foreground: "hsl(0 0% 100%)",
        },
        muted: {
          DEFAULT: "hsl(240 2.0% 90.0%)",
          foreground: "hsl(210 25% 7.8%)",
        },
        accent: {
          DEFAULT: "hsl(211.6 51.4% 92.7%)",
          foreground: "hsl(203.9 88.3% 53.1%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(210 25% 7.8%)",
        },
        card: {
          DEFAULT: "hsl(180 6.7% 97.1%)",
          foreground: "hsl(210 25% 7.8%)",
        },
      },
      borderRadius: {
        lg: "1.3rem",
        md: "calc(1.3rem - 2px)",
        sm: "calc(1.3rem - 4px)",
      },
    },
  },
  plugins: [],
}


