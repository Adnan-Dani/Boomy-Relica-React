import { Button } from "react-bootstrap";
import "./../pages/Home/Home.css";

const Banner = () => {
  return (
    <div className="header-wrapper">
      <div className="text-center">
        <h1 className="Header">
Let's harmonize with RFM Official</h1>
        <h1 className="Header">To create a musical masterpiece</h1>
        <ul className="list-unstyle">
          <li className="list-item">
            <div> 🎶</div>
            <div>
              {" "}
            
Craft unique melodies instantly, regardless of your musical experience.
            </div>
          </li>
          <li className="list-item">
            <div> 🌐</div>
            <div>
              {" "}
             
Share your compositions on streaming platforms and earn royalties for every listener.{" "}
            </div>
          </li>
          <li className="list-item">
            <div> 💜</div>{" "}
            <div>
              {" "}
              Become part of a worldwide network of artists empowered by generative music.
            </div>
          </li>
          <li className="list-item mt-lg-5 mt-0">
            <Button className="bg-purple border-purple">
            Compose your own music{" "}
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
