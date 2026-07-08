import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SK Apps — Independent app studio",
    template: "%s — SK Apps",
  },
  description:
    "SK Apps designs and engineers premium mobile and web products — from the first sketch to the App Store.",
  openGraph: {
    title: "SK Apps — Independent app studio",
    description:
      "We design and engineer premium mobile and web products, end to end.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body style={{ ["--font-geist" as string]: GeistSans.style.fontFamily }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
