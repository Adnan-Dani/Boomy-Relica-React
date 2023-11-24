import { Button } from "react-bootstrap";
const Banner = () => {
  return (
    <div className="header-wrapper">
      <div className="text-center">
        <h1>Unleash your creativity</h1>
        <h1>Make music with RFM Official</h1>
        <ul className="list-unstyle">
          <li className="list-item">
            🎶 Create original songs in seconds, even if you've never made music
            before
          </li>
          <li className="list-item">
            🌐 Submit your songs to streaming platforms and get paid when people
            listen
          </li>
          <li className="list-item">
            💜 Join a global community of artists empowered by generative music
          </li>
          <li className="list-item mt-5">
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
