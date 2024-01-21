import { useAuth0 } from "@auth0/auth0-react";

import React from "react";

const LoginButton = () => {
  const { user, loginWithPopup, isAuthenticated } = useAuth0();

  return !isAuthenticated ? (
    <div>
      <button onClick={() => loginWithPopup()}>Sign In</button>
    </div>
  ) : (
    <div>{JSON.stringify(user)}</div>
  );
};

export default LoginButton;
