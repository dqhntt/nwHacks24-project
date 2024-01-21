import React, { useState } from "react";
import RewardCard from "../components/RewardCard";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Rewards() {
  return (
    <>
      <h1>Rewards</h1>
      <div style={{ display: "flex", overflowX: "scroll" }}>
        <RewardCard title="20% off at Walmart" numPoints={1000}></RewardCard>
        <RewardCard title="$15 off at SFU Bookstore" numPoints={750}></RewardCard>
        <RewardCard title="10% off at Amazon" numPoints={500}></RewardCard>
      </div>
    </>
  );
}
