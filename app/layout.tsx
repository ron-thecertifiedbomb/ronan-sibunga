import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import portfolio from "@/data/portfolio.json";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.metadata.siteUrl),

  title: {
    default: portfolio.metadata.title,
    template: `%s • ${portfolio.personal.name}`,
  },

  description: portfolio.metadata.description,

  keywords: portfolio.metadata.keywords,

  authors: [
    {
      name: portfolio.metadata.author,
    },
  ],

  creator: portfolio.metadata.author,
  publisher: portfolio.metadata.author,

  openGraph: {
    title: portfolio.metadata.title,
    description: portfolio.metadata.description,
    url: portfolio.metadata.siteUrl,
    siteName: portfolio.metadata.siteName,
    locale: portfolio.metadata.locale,
    type: "website",

    images: [
      {
        url: portfolio.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: portfolio.metadata.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: portfolio.metadata.title,
    description: portfolio.metadata.description,
    creator: portfolio.metadata.twitterHandle,

    images: [portfolio.metadata.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  themeColor: portfolio.metadata.themeColor,

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-zinc-100`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}