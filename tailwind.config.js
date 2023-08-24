/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('./images/bg-pattern-desktop.svg')",
        mobile: "url('./images/bg-pattern-mobile.svg')",
        btn: "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        "btn-error-state":
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
      },
      fontFamily: {
        JosefinSans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        DesaturatedRed: "hsl(0, 36%, 70%)",
        SoftRed: "hsl(0, 93%, 68%)",
        DarkGrayishRed: "hsl(0, 6%, 24%)",
      },
      borderWidth: {
        1: "1px",
      },
      letterSpacing: {
        "ultra-wide": "0.25em",
      },
      fontSize: {
        "6.5xl": "4rem",
      },
      lineHeight: {
        wide: 1.07,
      },
    },
  },
  plugins: [],
};
