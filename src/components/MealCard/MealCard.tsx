"use client";
import { MealCardTitle } from "@/interfaces/types";
import styles from "../../styles/MealCard.module.scss";
import MealCardFood from "./MealCardFood";

export default function MealCard(props: MealCardTitle) {
  return (
    <div className={styles.mealcardContainer}>
      <div className={styles.mealcard_title}>
        <p>{props.title}</p>
        <p>535</p>
      </div>
      <MealCardFood />
      <div className={styles.AddFood}>
        <button>Add food</button>
      </div>
    </div>
  );
}
