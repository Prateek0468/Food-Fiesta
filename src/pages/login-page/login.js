import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./login.css";

function Login() {
  return (
    <div className="login">
      {/* <Navbar /> */}
      <div className="signIn-signUp">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
}

export default Login;
