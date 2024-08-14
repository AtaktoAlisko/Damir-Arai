import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dastan toy",
  description: "toy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[url('/all-bg.jpg')] bg-cover bg-no-repeat">
        {children}
      </body>
    </html>
  );
}
