import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";

const Masiku = localFont ({
  src: [{path: "/fonts/Masiku.ttf", weight: "400", style: "normal"}],
});

 const drukCondSuper = localFont({
  src: [
    { path: '/fonts/DrukCondTrialSuper.ttf', weight: '900', style: 'normal' },
  ],
});

const drukBold = localFont({
  src: [
    { path: '/fonts/DrukTrialBold.ttf', weight: '700', style: 'normal' }
  ],
});

const drukMedium = localFont({
  src: [
    { path: '/fonts/DrukTrialMedium.ttf', weight: '400', style: 'normal' },
  ],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Salman's Portfolio",
  description: "Welcome to my portfolio website! I'm Md Salman, a passionate developer and designer. Explore my projects, skills, and experiences as I showcase my journey in the world of technology and creativity. Let's connect and create something amazing together! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} relative flex min-h-screen flex-col `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
