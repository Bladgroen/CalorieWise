import styles from "./AnimatedOrb.module.scss";

export default function AnimatedOrb() {
  const repetitions = 300;

  const elements = Array.from({ length: repetitions }, (_, index) => index);
  return (
    <div className={styles.wrap_container}>
      <div className={styles.wrap}>
        {elements.map((index) => (
          <div key={index} className={styles.c}></div>
        ))}
      </div>
    </div>
  );
}
