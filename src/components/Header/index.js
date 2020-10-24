import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";
import { useEffect } from "preact/hooks";
import CircleType from "circletype";
const Header = () => {
  useEffect(() => {
    const circleType = new CircleType(document.getElementById("circle-text"));
    circleType.dir(-1);
  }, []);
  return (
    <div className="title-wrapper">
      <h1>
        <i className="fa fa-hand-peace-o" aria-hidden="true"></i> Hello ...
      </h1>
      <div id="circle-text">RUN - EAT - CODE - SLEEP - REPEAT - </div>
    </div>
  );
};

export default Header;
