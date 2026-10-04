import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bilindu Furniture | Premium Showroom",
  description: "Discover quality furniture designed to bring comfort, style, and character to your home. Explore living room, bedroom, dining room, and office collections.",
  keywords: ["furniture store", "modern furniture", "interior design", "living room sofa", "dining table", "bedroom furniture", "office desk"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#1D1D1B] bg-[#FAF8F5] selection:bg-[#E8DFD3] selection:text-[#1D1D1B]">
        {children}
      </body>
    </html>
  );
}
