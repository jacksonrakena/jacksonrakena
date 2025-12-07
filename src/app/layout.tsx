import { Metadata, Viewport } from "next";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Jackson Rakena",
  description: "Full-stack software engineer in Sydney, Australia",
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
      <body>
        <ThemeProvider attribute={'class'}>
          <Theme>
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
