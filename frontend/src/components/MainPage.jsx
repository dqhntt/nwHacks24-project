import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";


const MainPage = () => {
    const { user, loginWithPopup, isAuthenticated, logout } = useAuth0();
  
    return(
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <div style={{ display: "flex", float: "center", justifyContent: "center", alignItems: "center", width: "800px"}}>
          <div style={{ float: "left", width: "10%", justifyContent: "center", alignItems: "right", display: "flex" }}><button style={{ all: "unset", cursor: "pointer" }} ><img src="/leftArrow.png" style={{ width: "100px" }}></img></button> </div>
          <div style={{ float: "left", width: "80%", justifyContent: "center", alignItems: "center", display: "flex" }}><img src="/task1.png" style={{ width: "450px" }}></img></div>
          <div style={{ float: "left", width: "10%", justifyContent: "center", alignItems: "left", display: "flex" }}><button style={{ all: "unset", cursor: "pointer" }}><img src="/rightArrow.png" style={{ width: "100px" }}></img></button></div>
        </div>
        <div style={{ float: "center", display: "flex", marginTop: "2%", justifyContent: "center", alignItems: "right" }}>
          <div style={{ float: "left", width: "35%", justifyContent: "center", alignItems: "center", display: "flex", }}><button style={{ all: "unset", cursor: "pointer" }} ><img src="/rejectButton.png" style={{ width: "180px" }} ></img></button></div>
          <div style={{ float: "left", width: "30%", justifyContent: "center", alignItems: "center", display: "flex", }}><button style={{ all: "unset", cursor: "pointer" }} ><img src="/remindButton.png" style={{ width: "70px" }}></img></button></div>
          <div style={{ float: "left", width: "35%", justifyContent: "center", alignItems: "center", display: "flex", }}><button style={{ all: "unset", cursor: "pointer" }} ><img src="/acceptButton.png" style={{ width: "180px" }}></img></button></div>
        </div>
        <button onClick={() => logout()} style={{ all: "unset", cursor: "pointer", marginTop: "2px" }}><img src="/signOut.png" style={{ width: "100px" }} ></img></button>
      </div>
    );
  };
  
  export default MainPage;