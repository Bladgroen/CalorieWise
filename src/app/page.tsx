import CalorieBubble from "@/components/CalorieBubble";
import MealCard from "../components/MealCard/MealCard";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <>
      <div className={styles.calorieBubble}>
        <CalorieBubble />
      </div>
      <MealCard />
      <MealCard />
    </>
  );
}
