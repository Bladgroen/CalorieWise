"use client";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import styles from "../styles/NavBar.module.scss";

export default function NavBar() {
  const [activePage, setActivePage] = useState("home");

  const handlePageClick = (label: string) => {
    setActivePage(label);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
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
                  activePage === "calender" ? styles.activeIcon : ""
                }`}
              />
            }
            onClick={() => handlePageClick("calender")}
          />
        </Link>
        <Link href="/">
          <BottomNavigationAction
            label="Home"
            icon={
              <HomeIcon
                className={`${styles.icon} ${
                  activePage === "home" ? styles.activeIcon : ""
                }`}
              />
            }
            onClick={() => handlePageClick("home")}
          />
        </Link>
        <Link href="/profile">
          <BottomNavigationAction
            label="Profile"
            icon={
              <Person2Icon
                className={`${styles.icon} ${
                  activePage === "profile" ? styles.activeIcon : ""
                }`}
              />
            }
            onClick={() => handlePageClick("profile")}
          />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}
