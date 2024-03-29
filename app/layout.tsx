import { Container } from "@chakra-ui/react";
import { Metadata, Viewport } from "next";
import { Nav } from "./nav";
import { Providers } from "./providers";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container maxW="container.sm">
            <Nav />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
