import styles from "./HeaderBar.module.scss";

export default function HeaderBar() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>CalorieWise</h1>
    </div>
  );
}
