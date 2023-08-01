import Link from "next/link";
import AnimatedOrb from "./Animatedorb";
import styles from "./welcome.module.scss";

export default function WelcomePage() {
  return (
    <div className={styles.welcomeContainer}>
      <AnimatedOrb />
      <div className={styles.welcome}>
        <p className={styles.message}>Welcome to CalorieWise</p>
        <div className={styles.buttons}>
          <Link href="/login" className={styles.link}>
            <button>Login</button>
          </Link>

          <Link href="/register" className={styles.link}>
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
