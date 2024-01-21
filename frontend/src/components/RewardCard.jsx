import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import DiscountCode from "../components/DiscountCode";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function RewardCard({ title, numPoints, imgSrc, redeemPoints }) {
  const [itemPurchased, setItemPurchased] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const generateRandomCode = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };
  
  const [code, setCode] = useState(generateRandomCode(8));

  const handleButtonClick = () => {
    const oldNumPoints = numPoints;

    if (redeemPoints(numPoints)) {
      setShowCode(!showCode); // Toggle discount code
      setItemPurchased(true); // Reveal discount code
    }
  };

  return (
    <Card style={{ width: "18rem", marginRight: "1rem" }}>
      <Card.Img variant="top" src={imgSrc} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{numPoints} points</Card.Text>
        <Col>
          <DiscountCode code={code} showCode={showCode}></DiscountCode>
          {itemPurchased ? (
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                onClick={handleButtonClick}
                disabled
              >
                Redeemed
              </Button>
            </div>
          ) : (
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={handleButtonClick}>
                Redeem
              </Button>
            </div>
          )}
        </Col>
      </Card.Body>
    </Card>
  );
}
