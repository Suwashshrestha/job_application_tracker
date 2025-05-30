
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from "./components/Navbar"


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Job Application Tracker',
  description: 'A simple job application tracker',
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
     
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}