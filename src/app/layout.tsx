import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",          
});

export const metadata: Metadata = {
  title: "Quinefiy",
  description: "digital transformation partner and Software Product Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className="font-sans bg-[#01070F]"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
