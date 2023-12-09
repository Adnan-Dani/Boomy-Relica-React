import "./Comingsoon.css";
import ForestImage from "../../assets/ForestImage.jpg";
import { Link } from "react-router-dom";

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
          <h3 className="my-4 mx-3">
            <Link to="/dashboard">RFM OFFICIAL</Link>{" "}
          </h3>
        </div>
        <div className="MainOuterDiv">
          <h1>Coming Soon</h1>
        </div>
      </div>
    </>
  );
};

export default Comingsoon;
