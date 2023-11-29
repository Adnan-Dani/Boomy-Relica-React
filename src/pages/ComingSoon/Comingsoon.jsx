import React from "react";
import "./Comingsoon.css";
import ForestImage from "../../assets/ForestImage.jpg";

const Comingsoon = () => {
  return (
    <>
      <div
        style={{
          background: `url(${ForestImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectPosition: "right 75%",
        }}
      >
        <div className="d-flex align-items-center mx-3">
          {" "}
          <img src="assets/logo.jpg" alt="" className="logowidth" />
          <h3 className="my-4 mx-3"> RFM OFFICIAL </h3>
        </div>
        <div className="MainOuterDiv">
          <h1>Coming Soon</h1>
        </div>
      </div>
    </>
  );
};

export default Comingsoon;
