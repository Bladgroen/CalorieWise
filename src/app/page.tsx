import CalorieBubble from "@/components/CalorieBubble";
import MealCard from "../components/MealCard/MealCard";
import styles from "./page.module.scss";

export default function Page() {
  const eatenCalories = 1000;
  return (
    <>
      <div className={styles.calorieBubble}>
        <CalorieBubble eatenCalories={eatenCalories} />
      </div>
      <MealCard />
      <MealCard />
    </>
  );
}
