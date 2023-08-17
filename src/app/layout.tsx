import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CalorieWise",
  description: "CalorieWise tracks all you calories for you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
