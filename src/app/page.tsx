"use client";
import CalorieBubble from "@/components/CalorieBubble";
import HeaderBar from "../components/HeaderBar";
import Layout from "../components/LayoutEdit";
import MealCard from "../components/MealCard/MealCard";
import NavBar from "../components/NavBar";
import { logOut } from "../firebase/signup";
import useAuth from "./../firebase/useAuth";
import styles from "./page.module.scss";

export default function Page() {
  const eatenCalories = 1000;
  useAuth();
  return (
    <>
      <Layout>
        <button onClick={logOut}></button>
        <div className={styles.calorieBubble}>
          <CalorieBubble eatenCalories={eatenCalories} />
        </div>
        <MealCard />
        <MealCard />
      </Layout>
    </>
  );
}
