import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import "../Song/Songs.css";
import rap from "../../assets/rap.svg";
import lo from "../../assets/lo.svg";
import global from "../../assets/global.svg";
import custom from "../../assets/custom.svg";
import relaxing from "../../assets/relaxing.svg";
import electronicSvg from "../../assets/electronicSvg.svg";
import rightArrow from "../../assets/rightArrow.svg";
import { ReactSVG } from "react-svg";
import { FaPlay } from "react-icons/fa";

const Songs = () => {
  const cardsData = [
    {
      title: "Electronic Dance",
      desciption:
        "Get ready to move with EDM-style sweeps and drops over huge drums and synthesizers",
      icon: electronicSvg,
    },
    {
      title: "Rap Beats",
      desciption:
        "Modern beats influenced by Hip Hop and Trap. Inspire a new dance, layer your verses, or just nod along.",
      icon: rap,
    },
    {
      title: "Lo-Fi",
      desciption:
        "Grainy beats melt into nature-infused ambient sounds to center your focus, rain or shine.",
      icon: lo,
    },
    {
      title: "Global Groove",
      desciption:
        "Chill beats inspired by globally popular styles like Latin, Reggae, and Afrobeat.",
      icon: global,
    },
    {
      title: "Relaxing Meditation",
      desciption:
        "Slow, soothing music perfect for yoga, meditation, studying, or falling asleep.",
      icon: relaxing,
    },
    {
      title: "Custom",
      desciption:
        "Create without limits. Customize any style with your own composition and production instructions.",
      icon: custom,
    },
  ];
  return (
    <>
      <Container className="d-flex justify-content-center">
        <div className="box">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="Title">Create a song</div>
            <Button className="CrossButton">
              <RxCross2 />
            </Button>
          </div>
          <div className="SubTitile">Select style</div>
          <div className="titleDescription">
            Start by choosing the instrumental style of your song
          </div>
          <Row className="d-flex justify-content-center">
            {cardsData.map((data) => (
              <Col lg={6} xs={12} className="my-1">
                <div className="card ">
                  <div className="d-flex h-100 ">
                    <div className="align-self-center m-3">
                      <ReactSVG src={data.icon} />
                    </div>
                    <div className="align-items-center justify-centent-center my-auto">
                      <div className="cardTitle">{data.title}</div>
                      <div className="cardDescription">{data.desciption}</div>
                    </div>
                    <div className="align-items-center my-auto">
                      <ReactSVG src={rightArrow} />
                    </div>
                  </div>
                </div>
                <div className="iconPreview">
                  <div className="playicon">
                    <FaPlay size={10} />
                  </div>
                  <div className="preview">Preview</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Songs;
