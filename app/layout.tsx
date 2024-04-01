import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Space",
  description: "Learning a tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
