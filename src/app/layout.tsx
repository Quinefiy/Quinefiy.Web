import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/utils/ReactQueryProvider"; 
import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Quinefiy",
  description:
    "Quinefiy is a software development company providing AI-powered digital solutions, API integration, cloud services, cybersecurity, UI/UX design, and IT consulting.",
  keywords: [
    "Quinefiy",
    "AI solutions",
    "machine learning",
    "software development",
    "API integration",
    "cybersecurity",
    "cloud services",
    "IT consulting",
    "UI/UX design",
    "digital transformation"
  ],
  openGraph: {
    title: "Quinefiy | Software Development & AI Digital Solutions",
    description:
      "Quinefiy delivers cutting-edge AI, machine learning, software development, and IT solutions to power digital transformation.",
    url: "https://quinefiy.com",
    siteName: "Quinefiy",
    images: [
      {
        url: "https://quinefiy.com/home-og.jpg",
        alt: "Quinefiy Software Development & AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quinefiy | Software Development & AI Digital Solutions",
    description:
      "Quinefiy delivers AI, software development, API integration, cloud services, cybersecurity, and IT consulting.",
    images: [""], 
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",          
});

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
       <ReactQueryProvider>
        <Navbar />
        {children}
        <Footer />
       </ReactQueryProvider>
       <GoogleAnalytics gaId="GTM-KZQS7FC9" />
      </body>
    </html>
  );
}
