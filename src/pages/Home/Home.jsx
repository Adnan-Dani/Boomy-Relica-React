// Custom Componets
import Banner from "../../Components/Banner";
import { Dropdown } from "react-bootstrap";
import "./Home.css";
// React Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import Playlist from "../../Components/Playlist/Playlist";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const testimonials = [
    {
      profile: "assets/10031.png",
      heading:
        "It's incredible how RFM Official has become my musical haven. Thanks to them, I've rediscovered my passion for music—a second chance to dive into what I love.. Xwen 11",
    },
    {
      profile: "assets/10032.png",
      heading:
        " It's amazing how RFM Official generates song ideas I'd never have thought of, and then I transform them into something I genuinely adore. Lightfoot",
    },
    {
      profile: "assets/10033.png",
      heading:
        " I adore crafting tracks to complement AI-generated animations. Combining my vocals with RFM Official's auto-vocal feature helps me navigate the intriguing realm of the uncanny valley, seeking the perfect balance. Kier",
    },
    {
      profile: "assets/10034.png",
      heading:
        " Exploring a unique sound, steering clear of the usual echoes in the crowd. Stunna 4 Vegas",
    },
  ];
  return (
    <>
    <div className="testimonial">
      <Banner />
      <Container >
        <Row>
          <Col>
            <h1 className="testamonialHeading">The RFM Effect</h1>
            <h4 className="testamonialSubHeading">
             
People are leveraging RFM Official to fuel and amplify their creative potential.
            </h4>
          </Col>
        </Row>
        <Row>
          {testimonials.map((t,index) => (
            <div key={t.profile} className="col-lg-3">
              <Row className="align-items-center TestamonialMain my-3">
                <img
                  src={t.profile}
                  className={`col-3 col-lg-12 testamonialImage ${index === 1 || index === 3 ? "order-lg-1 order-2": ""}`}
                  height="250px"
                  width="250px"
                  alt=""
                />
                <h6 className={` col-9 col-lg-12 testamonialImageHeading  ${index === 1 || index === 3 ? "order-lg-1 order-1": ""}`}>"{t.heading}</h6>
              </Row>
            </div>
          ))}
        </Row>
        <div className="row my-5 gap-5 d-flex justify-content-center  ">
          <div className="col-lg-1 col-sm-2  col-3">
            <img className="imgsize" src="assets/10019.png" alt="" />
          </div>
          <div className="col-lg-1 col-sm-2 col-3">
            <img className="imgsize" src="assets/10018.png" alt="" />
          </div>
          <div className="col-lg-1 col-sm-2 col-3">
            <img className="imgsize" src="assets/10019.png" alt="" />
          </div>
          <div className="col-lg-1 col-sm-2 col-3">
            <img className="imgsize" src="assets/10020.png" alt="" />
          </div>
          <div className="col-lg-1 col-sm-2 col-3">
            <img className="imgsize" src="assets/10021.png" alt="" />
          </div>
          <div className="col-lg-1 col-sm-2 col-3">
            <img className="imgsize" src="assets/10022.png" alt="" />
          </div>
          <div className="col-lg-1 col-sm-2 col-3">
            <img className="imgsize" src="assets/10023.png" alt="" />
          </div>
          <div className="col-lg-1 col-sm-2 col-3">
            <img className="imgsize" src="assets/10024.png" alt="" />
          </div>
        </div>

        <Row>
          <Col>
            <Playlist />
          </Col>
        </Row>
        <Row className="text-left ">
          <Col>
            <h2>Featured releases</h2>
          </Col>
        </Row>
      

        <div className=" featured">
            <div className="  text-start">
              <img src="assets/1.jpg" width="100" height="100" />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>
            <div className="  text-start ">
              <img src="assets/2.jpeg" width="100" height="100" />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>{" "}
            <div className=" text-start">
              <img src="assets/3.jpeg" width="100" height="100" />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>{" "}
            <div className="  text-start">
              <img src="assets/4.jpg" width="100" height="100" />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>{" "}
            <div className=" text-start">
              <img src="assets/5.jpeg" width="100" height="100" />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>{" "}
            <div className=" text-start">
              <img src="assets/6.jpeg" width="100" height="100" />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>{" "}
            <div className=" text-start">
              <img src="assets/10010.jpeg" width="100" height="100" />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>{" "}
            <div className=" text-start">
              <img src="assets/2.jpeg" width="100" height="100" />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>{" "}
            <div className=" text-start">
              <img src="assets/4.jpg" width="100" height="100" />
              <p className="releasename">Valley Of Gua...</p>
              <p className="artistname">DemonC0re</p>
            </div>
          </div>
       
        <Row className="pb-5" >
    
          <div className="row">
            <div className="col-md-10 col-6  ">
              <form className="d-flex">
                <input
                  className="form-control bg-transparent text-white me-2"
                  type="search"
                  placeholder="Search Song"
                  aria-label="Search"
                 style={{width:"100%"}}
                />
              </form>
            </div>
            <div className="col-md-2 col-5">
              <Dropdown>
                <Dropdown.Toggle
                  className="dropdsearch"
                  variant="success"
                  id="dropdown-basic"
                >
                  Sort By: Date created
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#action/1">Artist</Dropdown.Item>
                  <Dropdown.Item href="#action/2">Song Title</Dropdown.Item>
                  <Dropdown.Item href="#action/3">Date created</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Row>

        <div className="row py-5">
          <div className="col-lg-6">
            <h2 className="text-start">Trending</h2>
            <div>
              <div className="d-flex justify-between gap-3">
                <p className="mt-2">1</p>
                <img
                  height={"50px"}
                  width={"50px"}
                  src="assets/10028.jpg"
                  alt=""
                />
                <span className="font-weight-500 mt-2">#chill</span>
              </div>

              <div className="d-flex justify-between pt-2 gap-3">
                <p className="mt-2">2</p>
                <img
                  height={"50px"}
                  width={"50px"}
                  src="assets/10029.jpg"
                  alt=""
                />
                <span className="font-weight-500 mt-2">#chill</span>
              </div>
              <div className="d-flex justify-between pt-2 gap-3">
                <p className="mt-2">3</p>
                <img
                  height={"50px"}
                  width={"50px"}
                  src="assets/10030.jpg"
                  alt=""
                />
                <span className="font-weight-500 mt-2">#chill</span>
              </div>
              <div className="d-flex justify-between pt-2 gap-3">
                <p className="mt-2">4</p>
                <img
                  height={"50px"}
                  width={"50px"}
                  src="assets/10027.jpg"
                  alt=""
                />
                <span className="font-weight-500 mt-2">#chill</span>
              </div>
              <div className="d-flex justify-between pt-2 gap-3">
                <p className="mt-2">5</p>
                <img
                  height={"50px"}
                  width={"50px"}
                  src="assets/10026.jpg"
                  alt=""
                />
                <span className="font-weight-500 mt-2">#chill</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-md-0 mt-5 ">
            <h2 className="text-start">Featured songs</h2>
            {[1, 2, 3, 4].map((m) => (
              <div
                key={m}
                className="d-flex justify-content-between align-items-center px-3  bgmusic"
              >
                <div>
                  <h5 className="mb-0">Waves</h5>
                  <p>Katirah</p>
                </div>
                <div>
                  <p>02:06</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      
      </div>
      <Footer />
    </>
  );
};

export default Home;
