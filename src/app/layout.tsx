"use client";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import initFirebase from "../firebase/config";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });
initFirebase();
const auth = firebase.auth();

export const metadata: Metadata = {
  title: "CalorieWise",
  description: "CalorieWise tracks all you calories for you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        router.push("/login");
      }
    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
