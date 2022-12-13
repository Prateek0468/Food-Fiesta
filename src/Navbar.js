import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { auth } from "./firebase";

function Navbar({ user }) {
  console.log(user);

  return (
    <div className="navbar">
      <Link to="/" className="nav__logo">
        <FastfoodIcon className="nav__icon" />
        <h1>FoodFiesta</h1>
      </Link>
      {user ? (
        <div className="signOut" onClick={() => auth.signOut()}>
          {`Hello, ${user.displayName}`}
        </div>
      ) : (
        <Link to="/Login" className="nav__login">
          <h2>Login</h2>
          {/* {user.displayName} */}
        </Link>
      )}
    </div>
  );
}

export default Navbar;
