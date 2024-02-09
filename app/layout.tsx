import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GSA Demo",
  description: "A AI powered search engine for GSA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="lofi" className="">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
