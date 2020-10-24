import { Link } from "preact-router/match";
import * as styles from "./index.css";

const NavBar = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.label}>Explore</div>
      <div className={styles.spacer}></div>
      <div className={styles.item}>
        <Link activeClassName={styles.active} href="/">
          About Me
        </Link>
      </div>
      <div className={styles.item}>
        <Link activeClassName={styles.active} href="/timeline">
          Timeline
        </Link>
      </div>
      <div className={styles.item}>
        <a>Work</a>
      </div>
      <div className={styles.item}>
        <a>Sports</a>
      </div>
      <div className={styles.item}>
        <a>Contact</a>
      </div>
    </div>
  );
};
export default NavBar;
