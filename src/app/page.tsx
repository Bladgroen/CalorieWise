import CalorieBubble from "@/components/CalorieBubble";
import MealCard from "../components/MealCard/MealCard";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <CalorieBubble />
      <MealCard />
      <MealCard />
    </>
  );
}
