import styles from "../../styles/MealCardFood.module.scss";
export default function MealCardFood() {
  return (
    <div className={styles.info}>
      <div className={styles.info_name}>
        <p>Kipfilet</p>
        <p className={styles.info_volume}>500 gr</p>
      </div>
      <p className={styles.info_cal}>535</p>
    </div>
  );
}
