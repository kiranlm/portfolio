import { h } from "preact";

const RightPanel = () => {
  return (
    <>
      <div className="col-sm-12 col-md-5 right"></div>
      <div className="icon-container">
        <div className="icon-wrapper">
          <i class="fab fa-github"></i>
        </div>
        <div className="icon-wrapper">
          <i class="fab fa-linkedin-in"></i>
        </div>
        <div className="icon-wrapper">
          <i class="fab fa-twitter"></i>
        </div>
        <div className="icon-wrapper">
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </>
  );
};

export default RightPanel;
