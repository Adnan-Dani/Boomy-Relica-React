// Custom Componets
import Banner from "../Components/Banner";
import { Dropdown } from 'react-bootstrap';


// React Bootstrap
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Video from "../Components/Video";
import Playlist from "../Components/Playlist/Playlist";

const Home = () => {
  return (
    <>
      <Banner />
      <Video />
      <Container className="testimonial">
        <Row className="mb-5">
          <Col>
            <h1>The RFM Effect</h1>
            <h2>How people are using Boomy to empower their creativity</h2>
          </Col>
        </Row>

        <div className="row">
          <div className="col-md-3">
            <div>
              <img
                src="assets/10031.png"
                height="250px"
                width="250px"
                alt=""
              />
              <h5 className=" ">
                "Boomy became my band. Boomy is the reason why I'm getting back into music - I now have this second opportunity."

                Xwen 11
              </h5>
            </div>

          </div>
          <div className="col-md-3">
            <div>
              <img
                src="assets/10032.png"
                height="250px"
                width="250px"
                alt=""
              />
              <h5>"It's incredible taking newly generated song ideas from Boomy that I'd never think of, and flipping them to create something I truly love."

                Lightfoot</h5>
            </div>

          </div>
          <div className="col-md-3">
            <div>
              <img
                src="assets/10033.png"
                height="250px"
                width="250px"
                alt=""
              />
              <h5>"I love creating tracks to pair with AI-generated animations. I use my own vocals and the Boomy auto-vocal feature to try and find the perfect spot in the uncanny valley."

                Kier</h5>
            </div>

          </div>
          <div className="col-md-3">
            <div>
              <img
                src="assets/10034.png"
                height="250px"
                width="250px"
                alt=""
              />
              <h5>
                "Jumping into a different sound, just not trying to sound like everybody."

                Stunna 4 Vegas
              </h5>
            </div>

          </div>
        </div>
        <div className="row my-5 gap-5">
          <div className="col-md-1">

            <img className="imgsize" src="assets/10019.png" alt="" />


          </div>
          <div className="col-md-1">

            <img className="imgsize" src='assets/10018.png' alt="" />


          </div>
          <div className="col-md-1">

            <img className="imgsize" src='assets/10019.png' alt="" />


          </div>
          <div className="col-md-1">

            <img className="imgsize" src='assets/10020.png' alt="" />


          </div>
          <div className="col-md-1">

            <img className="imgsize" src='assets/10021.png' alt="" />


          </div>
          <div className="col-md-1">

            <img className="imgsize" src='assets/10022.png' alt="" />


          </div>
          <div className="col-md-1">

            <img className="imgsize" src='assets/10023.png' alt="" />


          </div>
          <div className="col-md-1">

            <img className="imgsize" src='assets/10024.png' alt="" />


          </div>

        </div>

        <Row>
          <Col>
            <Playlist />
          </Col>

        </Row>
        <Row className="text-left">
          <Col>
            <h2>Featured releases</h2>
          </Col>
        </Row>
        <Row className="pb-5">
          <div className="row gap-4">
            <div className="col-md-1  text-start">
              <img
                src='assets/1.jpg'
                width="100"
                height="100"
              />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>
            <div className="col-md-1  text-start">
              <img
                src='assets/2.jpeg'
                width="100"
                height="100"
              />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>    <div className="col-md-1  text-start">
              <img
                src='assets/3.jpeg'
                width="100"
                height="100"
              />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>    <div className="col-md-1  text-start">
              <img
                src='assets/4.jpg'
                width="100"
                height="100"
              />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>    <div className="col-md-1  text-start">
              <img
                src='assets/5.jpeg'
                width="100"
                height="100"
              />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>    <div className="col-md-1  text-start">
              <img
                src='assets/6.jpeg'
                width="100"
                height="100"
              />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>    <div className="col-md-1  text-start">
              <img
                src='assets/10010.jpeg'
                width="100"
                height="100"
              />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>    <div className="col-md-1  text-start">
              <img
                src='assets/2.jpeg'
                width="100"
                height="100"
              />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>    <div className="col-md-1  text-start">
              <img
                src='assets/4.jpg'
                width="100"
                height="100"
              />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>


          </div>
          <div className="row">
            <div className="col-md-10">

              <form className="d-flex">
                <input
                  className="form-control bg-transparent text-white me-2"
                  type="search"
                  placeholder="Search Song"
                  aria-label="Search"
                />

              </form>

            </div>
            <div className="col-md-2">
              <Dropdown>
                <Dropdown.Toggle className="dropdsearch" variant="success" id="dropdown-basic">
                  Sort By: Date created
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#action/1">Option 1</Dropdown.Item>
                  <Dropdown.Item href="#action/2">Option 2</Dropdown.Item>
                  <Dropdown.Item href="#action/3">Option 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Row>
        {/* Input Filed */}
        {/* <Row>
        
          <Col>
            <h2 className="text-left mb-4 text-white">Trending</h2>
            <ul>
              {[2, 32, 32, 3223, 232, 323, 23].map((t, i) => (
                <li key={t} className="challenge-container">
                  <div className="list-number"> {i + 1} </div>
                  <div className="image-container">
                    <img
                      src="https://storage.googleapis.com/boomy-assets/rap-thumb.jpg"
                      alt=""
                    />
                  </div>
                  <span className="font-weight-500">#chill</span>
                </li>
              ))}
            </ul>
          </Col>
          <Col>

          
            <h2 className="text-left mb-4 text-white">Feature release</h2>

            <ListGroup className="bg-none">
              {[2, 32, 3232, 232, 323, 23].map((t) => (
                <ListGroup.Item
                  key={t}
                  as="li"
                  className="d-flex justify-content-between align-items-start bg-none border-none"
                >
                  <div className="name-container">
                    <div className="">Subheading</div>
                    <span>Cras justo odio</span>
                  </div>
                  <span className="text-white">00:02</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row> */}
        <div className="row">
          <div className="col-md-2 ">
            <div className="d-flex justify-between gap-3">
              <p className="mt-2">1</p>
              <img
                src="assets/10028.jpg"
                alt=""
                className="w-25"
              />
              <span className="font-weight-500 mt-2">#chill</span>
            </div>

            <div className="d-flex justify-between pt-2 gap-3">
              <p className="mt-2">2</p>
              <img
                src="assets/10029.jpg" alt=""
                className="w-25"
              />
              <span className="font-weight-500 mt-2">#chill</span>
            </div>  
            <div className="d-flex justify-between pt-2 gap-3">
              <p className="mt-2">3</p>
              <img
                src="assets/10030.jpg" alt=""
                className="w-25"
              />
              <span className="font-weight-500 mt-2">#chill</span>
            </div>
            <div className="d-flex justify-between pt-2 gap-3">
              <p className="mt-2">4</p>
              <img
                src="assets/10027.jpg" alt=""
                className="w-25"
              />
              <span className="font-weight-500 mt-2">#chill</span>
            </div>
            <div className="d-flex justify-between pt-2 gap-3">
              <p className="mt-2">5</p>
              <img
                src="assets/10026.jpg"
                alt=""
                className="w-25"
              />
              <span className="font-weight-500 mt-2">#chill</span>
            </div>

          </div>
          <div className="col-4"></div>
          <div className="col-md-6 ">
            <h2 className="text-start">Featured songs</h2>
           <div className="d-flex justify-content-between align-items-center px-3  bgmusic">
           <div>
              <h5>Waves</h5>
              <p>Katirah</p>
            </div>
            <div>
              <p>02:06</p>
            </div>
           </div>
           <div className="d-flex justify-content-between align-items-center px-3  bgmusic">
           <div>
              <h5>Waves</h5>
              <p>Katirah</p>
            </div>
            <div>
              <p>02:06</p>
            </div>
           </div>   <div className="d-flex justify-content-between align-items-center px-3  bgmusic">
           <div>
              <h5>Waves</h5>
              <p>Katirah</p>
            </div>
            <div>
              <p>02:06</p>
            </div>
           </div>   <div className="d-flex justify-content-between align-items-center px-3  bgmusic">
           <div>
              <h5>Waves</h5>
              <p>Katirah</p>
            </div>
            <div>
              <p>02:06</p>
            </div>
           </div>
          </div>

        </div>
      </Container>
    </>
  );
};

export default Home;
