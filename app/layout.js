import { Playfair_Display, Nunito, Oswald, Inter } from "next/font/google";
import "./globals.css";

// Fonts are loaded by Next.js when the project is built.
// Bakery uses Playfair + Nunito; the gym uses Oswald + Inter.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", weight: ["400", "600", "700"] });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["500", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600"] });

export const metadata = {
  title: { default: "Sunrise Bakery and City Gym", template: "%s" },
  description: "Two one-page sites built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable} ${oswald.variable} ${inter.variable}`}>
      <body className="overflow-x-hidden font-sans antialiased">{children}</body>
    </html>
  );
}
