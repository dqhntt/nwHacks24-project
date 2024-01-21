import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import LoginButton from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import MainPage from "../components/MainPage";
import LoginPage from "../components/LoginPage";

export default function Home() {
  const { user, isAuthenticated } = useAuth0();
    return(
      <>
        <Navigation userAvatar={user?.picture}></Navigation>
        {!isAuthenticated ? (
          <LoginPage></LoginPage>
        ) : (
          <MainPage></MainPage>
        )}
      </>
    );
}
