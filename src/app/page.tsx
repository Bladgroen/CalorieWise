"use client";
import CalorieBubble from "@/components/CalorieBubble";
import Layout from "../components/LayoutEdit";
import MealCard from "../components/MealCard/MealCard";
import styles from "./page.module.scss";
export default function Page() {
  const eatenCalories = 1000;
  return (
    <>
      <Layout>
        <div className={styles.calorieBubble}>
          <CalorieBubble eatenCalories={eatenCalories} />
        </div>
        {/* padding bottom geven aan onderste element */}
        <MealCard />
        <MealCard />
      </Layout>
    </>
  );
}
