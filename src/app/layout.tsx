import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rithy Run — Portfolio",
  description:
    "Gen Z content creator and business student | Marketing, Content, Video, and Customer Engagement",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Rithy Run — Portfolio",
    description:
      "Gen Z content creator and business student | Marketing, Content, Video, and Customer Engagement",
    url: "https://example.com",
    siteName: "Rithy Run",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rithy Run Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
