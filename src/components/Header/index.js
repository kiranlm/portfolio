import * as styles from "./index.css";
import { useEffect } from "preact/hooks";
import CircleType from "circletype";
import NavBar from "../Nav";
const Header = () => {
  useEffect(() => {
    const circleType = new CircleType(document.getElementById("circle-text"));
    circleType.dir(-1);
  }, []);
  return (
    <div className="title-wrapper">
      <NavBar />
      <div id="circle-text" className={styles.circleText}>
        RUN - EAT - CODE - SLEEP - REPEAT -{" "}
      </div>
    </div>
  );
};

export default Header;
