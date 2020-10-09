import { h, Component } from "preact";
import { Router } from "preact-router";

import * as THREE from "three";
import BIRDS from "../lib/vanta.birds.min.js";

import Header from "./Header";
import RightPanel from "./RightPanel";

// Code-splitting is automated for routes
import Home from "../routes/home";

export default class App extends Component {
  componentDidMount() {
    BIRDS({
      el: "#birds", // element selector string or DOM object reference
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xffffff,
      color1: 0xd4ff,
      color2: 0x4800ff,
      colorMode: "variance",
      birdSize: 1.6,
      separation: 62.0,
      quantity: 4.0,
      THREE: THREE,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <div className="home-container">
          <div id="birds" className="page-container row">
            <div className="col-sm-12 col-md-7 left">
              <Header />
              <Router onChange={this.handleRoute}>
                <Home path="/" />
              </Router>
            </div>
            <RightPanel />
          </div>
        </div>
      </div>
    );
  }
}
