import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Fahmida ❤️",
  description: "A little letter, written especially for Fahmida.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
