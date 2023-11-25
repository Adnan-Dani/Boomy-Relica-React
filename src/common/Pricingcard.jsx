import "../pages/Pricing/pricing.css";
import { Button } from "react-bootstrap";
export default function Pricingcard({ data, features }) {
  return (
    <>
      <div className=" pricingCard">
        <div
          className="d-flex justify-content-center align-items-center titleDiv"
          style={{
            backgroundColor: `${data.bg}`,
            border: `1px solid ${data.borderColor}`,
          }}
        >
          <div>{data.title}</div>
        </div>
        <div className="PriceOuter">
          <div className="d-flex justify-content-center">
            <div className="price">{data.price}</div>
            <div className="month">{data.month}</div>
          </div>
        </div>
        <div style={{ height: "200px", overflowY: "auto", margin: "10px 0px" }}>
          <ul className="cardList">
            {features.map((data) => (
              <li className="d-flex align-items-center my-2">
                <div style={{ marginRight: "10px" }}> {data.icon}</div>{" "}
                <div className="ListTitle">{data.title}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="ButtonOuterDiv">
          <Button
            className="nextButton"
            style={{ backgroundColor: data.buttonColor }}
          >
            {data.buttonText}
          </Button>
        </div>
      </div>
    </>
  );
}
