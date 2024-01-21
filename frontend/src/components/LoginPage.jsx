import React from "react";
import LoginButton from "./LoginButton";

const LoginPage = () => {

  return(
    <>
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "110px"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
      <img src="/Title.png" style={{ width: "" }} ></img>
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
        <LoginButton></LoginButton>
      </div>
    </div>
    </>
  );
};

export default LoginPage;