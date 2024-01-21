import { useAuth0 } from "@auth0/auth0-react";

import React from "react";

const LoginButton = () => {
  const { user, loginWithPopup, isAuthenticated } = useAuth0();

  return !isAuthenticated ? (
    <div>
      <button onClick={() => loginWithPopup()} style={{ all: "unset", cursor: "pointer" }}><img src="/signIn.png" style={{ width: "100px" }} ></img></button>
    </div>
  ) : (
    // <div>{JSON.stringify(user)}</div>
    <div></div>
  );
};

export default LoginButton;
