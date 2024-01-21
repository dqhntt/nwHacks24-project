import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import LoginButton from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      {/* {isAuthenticated ? <p>auth</p> : <p>not auth</p>} */}

      <Navigation userAvatar={user?.picture}></Navigation>
      <LoginButton></LoginButton>
    </>
  );
}
