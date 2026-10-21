/* Colours come from CSS variables (see app/globals.css), so the same
   components show the bakery theme or the gym theme depending on the
   wrapper they sit in: class "theme-bakery" or "theme-gym". */
const themed = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: themed("cream"),
        sand: themed("sand"),
        tint: themed("tint"),
        card: themed("card"),
        caramel: themed("caramel"),
        caramelDark: themed("caramelDark"),
        cocoa: themed("cocoa"),
        bodytext: themed("bodytext"),
        line: themed("line"),
        footer: themed("footer"),
        onDark: themed("onDark"),
        onDarkMuted: themed("onDarkMuted"),
        accentOnDark: themed("accentOnDark"),
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
      boxShadow: {
        soft: "0 12px 34px rgba(120, 80, 50, 0.10)",
        lift: "0 20px 44px rgba(120, 80, 50, 0.16)",
      },
    },
  },
  plugins: [],
};
