import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: process.env.NEXT_PUBLIC_SCHOOL_NAME,
  description: process.env.NEXT_PUBLIC_SCHOOL_NAME,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add viewport meta tag here */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}