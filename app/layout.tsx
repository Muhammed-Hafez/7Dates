import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "../styles/globals.scss";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seven Dates",
  description: "We offer convenience, quality, and flexibility.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sevendates.com",
    siteName: "Seven Dates",
  },
  icons: [
    {
      rel: "icon",
      href: "/favicon.ico",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
