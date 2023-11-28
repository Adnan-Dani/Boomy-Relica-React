import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import createmusic from "../../assets/createmusic.jpg";
import createVideo from "../../assets/createVideo.jpg";
import generateLyrics from "../../assets/generateLyrics.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cardsection.css";

const Cardsection = () => {
  const Description = [
    {
      title: "Create Music",
      description:
        "Empowering creativity through tools and collaboration, Create Music fosters expression, allowing users to compose, remix, and collaborate in an innovative musical space",
      img: createmusic,
    },
    {
      title: "Create Music Video",
      description:
        "Craft captivating visual stories: Create Music Videos empowers creators to produce engaging, innovative, and expressive audio-visual experiences for diverse audiences.",
      img: createVideo,
    },
    {
      title: "Generate Lyrics",
      description:
        "Generate Lyrics: Unlock your creative flow, crafting poetic verses and melodies effortlessly with our innovative platform for lyrical inspiration and composition.",
      img: generateLyrics,
    },
  ];
  return (
    <>
      <Container className="my-5">
        <h1 className="cardHeadings my-5">Our Features</h1>
        <Row>
          {Description?.map((data) => (
            <Col md={4} xs={12}>
              <div className="d-flex justify-content-center align-items-center ">
                <div className="featuresCard my-md-0 my-4">
                  <img
                    src={data.img}
                    width={"250px"}
                    height={"200px"}
                    className="img"
                  />
                  <div className="title">{data.title}</div>
                  <div className="description">{data.description}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cardsection;
