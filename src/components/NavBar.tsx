"use client";
import ArchiveIcon from "@mui/icons-material/Archive";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestoreIcon from "@mui/icons-material/Restore";
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
              <RestoreIcon
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
              <FavoriteIcon
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
              <ArchiveIcon
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
