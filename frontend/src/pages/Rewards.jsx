import React, { useState } from "react";
import RewardCard from "../components/RewardCard";
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Rewards() {
  const [points, setPoints] = useState(1000);
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
        <h2>Rewards</h2>
        <h3>Points: {1000}</h3>
      </div>

      <div style={{ display: "flex", padding: "1rem" }}>
        <RewardCard
          title="$15 off at Walmart"
          numPoints={1000}
          imgSrc="/fruits.jpeg"
        ></RewardCard>
        <RewardCard
          title="$15 off at SFU Bookstore"
          numPoints={750}
          imgSrc="/sfu-library.jpeg"
        ></RewardCard>
        <RewardCard
          title="$10 gift card for Amazon"
          numPoints={500}
          imgSrc="/amazon.jpg"
        ></RewardCard>
      </div>

      <h2 style={{ padding: "1rem" }}>Discounts</h2>
      <div style={{ display: "flex", padding: "1rem" }}>
        <RewardCard
          title="15% off at Canadian Tire"
          numPoints={750}
          imgSrc="/canadian-tire.jpg"
        ></RewardCard>
        <RewardCard
          title="20% off at Hudson's Bay"
          numPoints={1000}
          imgSrc="/hudsons-bay.jpg"
        ></RewardCard>
        <RewardCard
          title="10% off at Tim Hortons"
          numPoints={500}
          imgSrc="/tim-hortons.jpg"
        ></RewardCard>
      </div>
    </>
  );
}
