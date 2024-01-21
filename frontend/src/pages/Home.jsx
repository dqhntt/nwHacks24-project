import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import LoginButton from "../components/LoginButton";

export default function Home() {
  return (
    <>
      <LoginButton></LoginButton>
      <Navigation></Navigation>
    </>
  );
}
