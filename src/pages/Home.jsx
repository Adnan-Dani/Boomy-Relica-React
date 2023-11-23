// Custom Componets
import Banner from "../Components/Banner";

// React Bootstrap
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Banner />
      <Container className="testimonial">
        <Row className="mb-5">
          <Col>
            <h1>The Boomy Effect</h1>
            <h2>How people are using Boomy to empower their creativity</h2>
          </Col>
        </Row>
        <Row className="pb-5">
          {[1, 2, 4, 5].map((r) => (
            <Col key={r} className="photo-background">
              <div>
                <img
                  src="https://boomy.com/img/xwen.5a3dca76.png"
                  height="250px"
                  width="250px"
                  alt=""
                />
                <p className="testimonial-text">
                  Boomy became my band. Boomy is the reason why Im getting back
                  into music - I now have this second opportunity
                </p>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="logos pt-5">
          <ul>
            {[1, 2, 33, 76].map((l) => (
              <li key={l}>
                <a href="#" className="logo">
                  <img src="https://boomy.com/img/bbc.5299b67f.png" alt="" />
                </a>
              </li>
            ))}
          </ul>
        </Row>
        <Row className="text-left">
          <Col>
            <h2>Featured releases</h2>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col className="listoffeatures">
            {[1, 23, 4345, 454, 64, 34, 343, 434].map((c) => (
              <div key={c} className="contains choices">
                <img
                  src="https://storage.googleapis.com/boomy-album-artwork/X0f34bj5MeYofqgq0Cxdtk2NI0v2/7fbd37f0-74e1-435e-a651-1497e9f1267e_thumb_160.jpeg"
                  width="112"
                  height="112"
                />
                <p className="releasename">Valley Of Guardians</p>
                <p className="artistname">DemonC0re</p>
              </div>
            ))}
          </Col>
        </Row>
        {/* Input Filed */}
        <Row>
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
                  <span data-v-6a2359f3="" className="font-weight-500">
                    #chill
                  </span>
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
        </Row>
      </Container>
    </>
  );
};

export default Home;
