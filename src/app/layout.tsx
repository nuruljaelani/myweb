import type { Metadata } from "next";
import { Inter, Reddit_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const redditMono = Reddit_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agajelek",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redditMono.className}>{children}</body>
    </html>
  );
}
