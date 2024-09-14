import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import "swiper/css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmSans" });

export const metadata: Metadata = {
  title: "Cryptic",
  description: "A Cryptocurrency Exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} font-inter text-blackPrimary`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
