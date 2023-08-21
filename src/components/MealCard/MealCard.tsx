"use client";
import styles from "../../styles/MealCard.module.scss";
import MealCardFood from "./MealCardFood";

export default function MealCard() {
  return (
    <div className={styles.mealcardContainer}>
      <div className={styles.mealcard_title}>
        <p>Ontbijt</p>
        <p>535</p>
      </div>
      <MealCardFood />
      <div className={styles.AddFood}>
        <button>Add food</button>
      </div>
    </div>
  );
}
