import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import DiscountCode from "../components/DiscountCode";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function RewardCard({ title, numPoints }) {
  const [itemPurchased, setItemPurchased] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleButtonClick = () => {
    setShowCode(!showCode);
    setItemPurchased(true);
  };
  return (
    <Card style={{ width: "18rem", marginRight: "1rem" }}>
      <Card.Img variant="top" src="/fruits.jpeg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{numPoints} points</Card.Text>
        <Col>
          <DiscountCode code="F92JF3" showCode={showCode}></DiscountCode>
          {/* <Button variant="primary" size="lg" onClick={handleButtonClick}>Purchase</Button>{" "} */}
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
