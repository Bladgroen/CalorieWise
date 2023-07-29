import styles from "../styles/CalorieBubble.module.scss";

export default function CalorieBubble() {
    return(
        <div className={styles.bubble}>
            <span className={styles.score}>1000/5000</span>
        </div>
    )
}