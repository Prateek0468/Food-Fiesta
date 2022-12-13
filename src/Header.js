import React from "react";
import "./Header.css";
import CardContainer from "./CardContainer";

function Header() {
  return (
    <div className="header">
      {/* <Navbar /> */}

      <h2> FoodFiesta</h2>
      <p> Give yourself a massive feast!</p>

      <CardContainer />
    </div>
  );
}

export default Header;
