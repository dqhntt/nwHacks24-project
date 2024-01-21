import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import LoginButton from "../components/LoginButton";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <Navigation userAvatar={user?.picture}></Navigation>
      <LoginButton></LoginButton>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src="/Task.png" width="800px"></img>
      </div>
    </>
  );
}
