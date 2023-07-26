"use client";
import ArchiveIcon from "@mui/icons-material/Archive";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestoreIcon from "@mui/icons-material/Restore";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import * as React from "react";
import styles from "../styles/NavBar.module.scss";

export default function NavBar() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
      className={styles.navbar}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={styles.navbar}
      >
        <Link href="/calender">
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </Link>
        <Link href="/home">
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Link>
        <Link href="/profile">
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}
