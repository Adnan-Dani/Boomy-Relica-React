import { Container, Button } from "react-bootstrap";
import { FaDiscord } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <footer>
      <Container>
        <h2>RFM Official</h2>
        <h5>
          RFM Official artists have created <span>18,082,786</span> original
          songs.
        </h5>
        <div>
          <Button variant="outline-primary border-purple text-white ">
            <FaDiscord /> Join Discord
          </Button>
          <Button variant="outline-primary border-purple text-white mx-2">
            <CiMail /> Say hello
          </Button>
          <Button variant="outline-primary border-purple text-white mx-2">
            <CiTwitter /> join
          </Button>
       


        </div>
        <ul className="footer-btns">
          <li className="list-item">
            <a href="#">Pricing</a>
          </li>
          <li className="list-item mx-4 ">
            <a href="#">Blog</a>
          </li>
          <li className="list-item">
            <a href="#">Careers</a>
          </li>
        </ul>
        <div>
          <div className="copyright">
            ⓟ © 2019-2023 RFM Official Corporation · 2991 Sacramento St. Unit
            #207 Berkeley, CA 94702 · 510-730-3746
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
