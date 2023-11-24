import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./pricing.css";
import Accordion from "react-bootstrap/Accordion";
import Pricingcard from "../../common/Pricingcard";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Pricing = () => {
  const accordionData = [
    {
      title: "How can I see my streaming numbers?",
      description:
        "You can view unconfirmed stream counts on your release pages after clicking on a release. These stream counts tend to be reported every 3-5 days from top streaming services and stores. Please note not all streaming services and stores report this information.",
      key: "1",
    },
    {
      title: "What is my share of royalties? How is it calculated?",
      description:
        "Royalties are calculated and reported by streaming services and stores, and rates vary widely depending on the outlet. While Boomy has no control over the rates paid by distribution partners, we actively seek all available royalties in order to maximize your earnings. Your share of royalties is 80% net of distribution fees, which include fees imposed by distribution partners managing Boomy releases and transaction fees imposed by payout partners like PayPal and Stripe. The remaining share of royalties is used by Boomy Corporation to fund operations and continue providing a free service.",
      key: "2",
    },
    {
      title: "How often is my share of royalties paid?",
      description:
        "Streaming revenue is deposited after it is received by Boomy from streaming services and stores, which is usually 2-3 months after the streams in a given month occur. This is different than the streaming activity of your releases, which is reported with a 1-5 day lag. Royalty share is deposited monthly,  between the 15th and 31st of each month. Let's say you earn 100 streams from Apple Music on September 1st. Those streams will start to be visible in your release's page on September 2nd-7th. Then, your revenue for those 100 streams would in most cases be deposited on November 15th, after the revenue is reported and confirmed by Apple Music to Boomy.",
      key: "3",
    },
    {
      title: "How do I withdraw my share of royalties?",
      description:
        " After your PayPal account has been synced, you may submit a request to withdraw a portion or all of your Boomy balance. You will receive a withdrawal processing estimate after submitting the request. Most withdrawals are processed within 5-7 business days, but future withdrawals to the same verified PayPal will usually process much faster.",
      key: "4",
    },
    {
      title: "How can I see my streaming numbers?",
      description:
        "You can view unconfirmed stream counts on your release pages after clicking on a release. These stream counts tend to be reported every 3-5 days from top streaming services and stores. Please note not all streaming services and stores report this information.",
      key: "5",
    },
  ];
  const freeFeatures = [
    {
      title: "Create and edit songs",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "25 song saves",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "1 release",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "Up to 3 songs per release",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "No downloads",
      icon: <RxCross2 color="red" />,
    },
    {
      title: "No commercial use",
      icon: <RxCross2 color="red" />,
    },
  ];
  const CreatorFeatures = [
    {
      title: "Create and edit songs",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "500 song saves",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "3 releases per month (up to 15 total)",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "Up to 25 songs per release",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "Expedited release review",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "MP3 downloads (10 per month)",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "Non-commercial use in social media and livestreaming",
      icon: <TiTick color="#21ECD8" />,
    },
  ];
  const proFeatures = [
    {
      title: "Create and edit songs",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "Unlimited song saves",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "Expedited release review",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "10 Releases per month",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "Up to 25 songs per release",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "25 MP3 & WAV downloads per month",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "Non-commercial use in video, livestreaming, and your own songs",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "Commercial use in podcasts and social media",
      icon: <TiTick color="#21ECD8" />,
    },
    {
      title: "Commercial use in social media advertising",
      icon: <TiTick color="#21ECD8" />,
    },
  ];
  const free = {
    title: "FREE",
    bg: "#1B1B24",
    borderColor: "#7f4af2",
    buttonText: "Try Now",
    price: "$0.00",
    month: "/mo",
  };
  const Create = {
    title: "CREATOR",
    bg: "#0E3636",
    borderColor: "#21ECD8",
    buttonText: "Select",
    price: "$9.99",
    month: "/mo",
    buttonColor: "#2C847E",
  };
  const pro = {
    title: "PRO",
    bg: "#1B1B24",
    borderColor: "#7f4af2",
    buttonText: "Select",
    price: "$29.99",
    month: "/mo",
  };
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center pricingHeader">
          <h1>Pricing & Plans</h1>
        </div>
        <div className=" pricingDescription">
          <p>
            Unleash your creativity with AI! Boomy offers three membership
            options to support your goals from creation to distribution.
          </p>
        </div>

        <Row className="my-5">
          <Col lg={4} xs={12} className="d-flex justify-content-center ">
            <Pricingcard data={free} features={freeFeatures} />
          </Col>
          <Col lg={4} xs={12}>
            <Pricingcard data={Create} features={CreatorFeatures} />
          </Col>
          <Col lg={4} xs={12}>
            <Pricingcard data={pro} features={proFeatures} />
          </Col>
        </Row>

        <h1 className="mb-5">Questions?We're here to help </h1>
        <Accordion defaultActiveKey="0">
          {accordionData.map((data) => (
            <Accordion.Item
              eventKey={data.key}
              key={data.key}
              className="accordionMain "
            >
              <Accordion.Header className="accordianTitle">
                {data.title}
              </Accordion.Header>
              <Accordion.Body className="accordionDescription">
                {data.description}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  );
};

export default Pricing;
