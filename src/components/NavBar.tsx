"use client";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import styles from "../styles/NavBar.module.scss";

export default function NavBar() {
  const currentPage = usePathname();
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
      className={styles.navbar}
    >
      <BottomNavigation className={styles.navbar}>
        <Link href="/calender">
          <BottomNavigationAction
            label="Calender"
            icon={
              <CalendarMonthIcon
                className={`${styles.icon} ${
                  currentPage === "/calender" ? styles.activeIcon : ""
                }`}
              />
            }
          />
        </Link>
        <Link href="/">
          <BottomNavigationAction
            label="Home"
            icon={
              <HomeIcon
                className={`${styles.icon} ${
                  currentPage === "/" ? styles.activeIcon : ""
                }`}
              />
            }
          />
        </Link>
        <Link href="/profile">
          <BottomNavigationAction
            label="Profile"
            icon={
              <Person2Icon
                className={`${styles.icon} ${
                  currentPage === "/profile" ? styles.activeIcon : ""
                }`}
              />
            }
          />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}
