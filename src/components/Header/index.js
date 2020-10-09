import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
  <div className="title-wrapper">
    <h1>
      <i className="fa fa-hand-peace-o" aria-hidden="true"></i> Kiran LM ...
    </h1>
  </div>
);

export default Header;
