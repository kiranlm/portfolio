import * as styles from "./style.css";
export default function Home() {
  return (
    <div className={styles.intro}>
      <p className={styles.title}>
        Hello ... I am <span className={styles.name}>Kiran LM</span>, a
        full-stack web developer from Kerala
      </p>
    </div>
  );
}
