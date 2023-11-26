import { Button } from "react-bootstrap";
import "./../pages/Home/Home.css";

const Banner = () => {
  return (
    <div className="header-wrapper">
      <div className="text-center">
        <h1 className="Header">Unleash your creativity</h1>
        <h1 className="Header">Make music with RFM Official</h1>
        <ul className="list-unstyle">
          <li className="list-item">
            <div> 🎶</div>
            <div>
              {" "}
              Create original songs in seconds, even if you've never made music
              before
            </div>
          </li>
          <li className="list-item">
            <div> 🌐</div>
            <div>
              {" "}
              Submit your songs to streaming platforms and get paid when people
              listen{" "}
            </div>
          </li>
          <li className="list-item">
            <div> 💜</div>{" "}
            <div>
              {" "}
              Join a global community of artists empowered by generative music
            </div>
          </li>
          <li className="list-item mt-lg-5 mt-0">
            <Button className="bg-purple border-purple">
              Create your song{" "}
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
