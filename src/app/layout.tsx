import { Metadata, Viewport } from "next";
import { Nav } from "./nav";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jackson Rakena",
  description: "Full-stack software engineer in Sydney, Australia",
  twitter: {
    images: ["https://avatars.githubusercontent.com/u/44521335?v=4"],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
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
