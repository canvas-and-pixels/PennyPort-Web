import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PennyPort | The Most Reliable Expense & Budget Tracker",
  description: "Experience the most efficient and reliable expense tracker. Master your budget with AI-driven insights, smart document management, and privacy-first tracking.",
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
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

