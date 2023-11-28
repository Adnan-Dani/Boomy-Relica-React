import React from "react";
import "./Login.css";
import background from "../../assets/background.png";
import { FaApple } from "react-icons/fa";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";
import { ReactSVG } from "react-svg";
import { useNavigate, redirect } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="LoginPageOuterDiv"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="LoginBox">
          <div>
            <div className="d-flex justify-content-center align-items-center my-2">
              <div className="welcomeText">Welcome back!</div>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <input type="text" className="Input" placeholder="Email" />
              <input type="text" className="Input" placeholder="password" />
              <button
                className="LoginButton"
                style={{ color: "white", fontWeight: "900" }}
                onClick={() => navigate("/comingsoon")}
              >
                Sign In
              </button>
              <div className="d-flex justify-content-center">
                <div className="OR">OR</div>
              </div>
              <button
                className="LoginButton"
                style={{ backgroundColor: "white" }}
              >
                <ReactSVG src={apple} />
                <div className="SignInWith">Sign in with Apple</div>
              </button>
              <button
                className="LoginButton"
                style={{ backgroundColor: "white" }}
              >
                <ReactSVG src={google} />{" "}
                <div className="SignInWith">Sign in with Google </div>
              </button>
              <button
                className="LoginButton"
                style={{ backgroundColor: "white" }}
              >
                <ReactSVG src={facebook} />
                <div className="SignInWith">Login with Facebook</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
