import Image from "next/image";
import MealCard from "../components/MealCard/MealCard";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <MealCard />
      <MealCard />
    </>
  );
}
