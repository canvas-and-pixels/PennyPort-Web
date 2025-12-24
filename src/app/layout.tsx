import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PennyPort | Finance at the Speed of Intelligence",
  description: "Take control with AI-driven insights, smart document management, and privacy-first tracking. The last finance tool you'll ever need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased selection:bg-primary-pink/30`}>
        {children}
      </body>
    </html>
  );
}
