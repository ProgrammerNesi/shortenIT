import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/componenets/Navbar";
import { Poppins } from 'next/font/google';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";


config.autoAddCss = false;

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // You can add more weights if needed
  variable: '--font-poppins', // optional for CSS variable usage
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShortenIT - a URL Shortener",
  description: "ShortIt is a fast, no-signup URL shortener with custom aliases, link expiry, and scheduled activation. Built for convenience and clarity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body 
        className="bg-[#FAF9EE]"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
