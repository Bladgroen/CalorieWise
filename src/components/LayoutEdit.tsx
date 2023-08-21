import HeaderBar from "./HeaderBar";
import NavBar from "./NavBar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <HeaderBar></HeaderBar>
      <div>{children}</div>
      <NavBar></NavBar>
    </div>
  );
}
