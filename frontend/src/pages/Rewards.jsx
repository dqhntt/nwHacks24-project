import React, { useState } from "react";
import RewardCard from "../components/RewardCard";
import Navigation from "../components/Navigation";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Rewards() {
  const [points, setPoints] = useState(3000);

  // Subtracts points from user's total points
  // Returns true if points were successfully subtracted
  const subtractPoints = (numPoints) => {
    const result = points - numPoints;
    if (result < 0) {
      alert("You do not have enough points to redeem this reward.");
      return false;
    } else {
      setPoints(points - numPoints);
      return true;
    }
  };

  return (
    <>
      <Navigation></Navigation>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <h1>Rewards</h1>
        <h3>Points: {points}</h3>
      </div>

      <div style={{ display: "flex", padding: "1rem" }}>
        <RewardCard
          title="$15 off at Walmart"
          numPoints={1000}
          imgSrc="/fruits.jpeg"
          redeemPoints={subtractPoints}
        ></RewardCard>
        <RewardCard
          title="$15 off at SFU Bookstore"
          numPoints={750}
          imgSrc="/sfu-library.jpeg"
          redeemPoints={subtractPoints}
        ></RewardCard>
        <RewardCard
          title="$10 gift card for Amazon"
          numPoints={500}
          imgSrc="/amazon.jpg"
          redeemPoints={subtractPoints}
        ></RewardCard>
        <RewardCard
            title="$25 off at Best Buy"
            numPoints={1500}
            imgSrc="/best-buy.jpg"
            redeemPoints={subtractPoints}
        ></RewardCard>
      </div>

      <h1 style={{ padding: "1rem" }}>Discounts</h1>
      <div style={{ display: "flex", padding: "1rem" }}>
        <RewardCard
          title="15% off at Canadian Tire"
          numPoints={750}
          imgSrc="/canadian-tire.jpg"
          redeemPoints={subtractPoints}
        ></RewardCard>
        <RewardCard
          title="20% off at Hudson's Bay"
          numPoints={1000}
          imgSrc="/hudsons-bay.jpg"
          redeemPoints={subtractPoints}
        ></RewardCard>
        <RewardCard
          title="10% off at Tim Hortons"
          numPoints={500}
          imgSrc="/tim-hortons.jpg"
          redeemPoints={subtractPoints}
        ></RewardCard>
        <RewardCard
            title="$20 off at Starbucks"
            numPoints={1000}
            imgSrc="/starbucks.jpg"
            redeemPoints={subtractPoints}
        ></RewardCard>
      </div>
    </>
  );
}
