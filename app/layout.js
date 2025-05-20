"use client";

import { appWithTranslation } from 'next-i18next'; // Import appWithTranslation
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "../components/LanguageSwitcher"; // Import the LanguageSwitcher component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4 bg-gray-100">
          <LanguageSwitcher /> {/* Add the LanguageSwitcher here */}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

// Wrap RootLayout with appWithTranslation
export default appWithTranslation(RootLayout);