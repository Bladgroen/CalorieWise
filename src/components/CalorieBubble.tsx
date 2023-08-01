import styles from "../styles/CalorieBubble.module.scss";

export default function CalorieBubble(props: any) {
  const eatenCalories = props.eatenCalories;
  return (
    <div className={styles.bubble}>
      <span className={styles.score}>{eatenCalories}</span>
      <span className={styles.score}>/5000</span>
    </div>
  );
}
