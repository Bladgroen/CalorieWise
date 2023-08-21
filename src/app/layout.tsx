"use client";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import initFirebase from "../firebase/config";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });
initFirebase();
const auth = firebase.auth();



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
