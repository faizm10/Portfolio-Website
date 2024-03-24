import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/NavBar/page';
import Footer from "./components/Footer/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faiz Mustansar",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
