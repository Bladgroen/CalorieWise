"use client";
import { useState } from "react";
import styles from "../../styles/MealCard.module.scss";
import MealCardFood from "./MealCardFood";

export default function MealCard() {
  const [shimmering, setShimmering] = useState(false);

  const handleClick = () => {
    setShimmering(true);
    setTimeout(() => {
      setShimmering(false);
    }, 1500);
  };

  return (
    <>
      <div className={styles.mealcard_title}>
        <p>Ontbijt</p>
        <p>535</p>
      </div>
      <MealCardFood />
      <div className={styles.AddFood}>
        <button
          className={`shimmer-effect ${shimmering ? "shimmering" : ""}`}
          onClick={handleClick}
        >
          Add food
        </button>
      </div>
    </>
  );
}
