import { Metadata, Viewport } from "next";
import { Nav } from "./nav";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jackson Rakena",
  description: "Full-stack software engineer with 2+ years of experience",
  twitter: {
    images: ["https://avatars.githubusercontent.com/u/44521335?v=4"],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  width: "device-width",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-svh flex-col items-center gap-6 bg-background p-6 md:p-10">
          <div className="w-full max-w-xl">
            <Nav />
          </div>
          <div className="w-full max-w-xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
