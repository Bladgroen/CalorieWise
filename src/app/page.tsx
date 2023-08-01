import CalorieBubble from "@/components/CalorieBubble";
import HeaderBar from "../components/HeaderBar";
import MealCard from "../components/MealCard/MealCard";
import NavBar from "../components/NavBar";
import styles from "./page.module.scss";

export default function Page() {
  const eatenCalories = 1000;
  return (
    <>
      <HeaderBar></HeaderBar>
      <div className={styles.calorieBubble}>
        <CalorieBubble eatenCalories={eatenCalories} />
      </div>
      <MealCard />
      <MealCard />
      <NavBar></NavBar>
    </>
  );
}
