import React, { useEffect, useState } from "react";
import { apiKey } from "./Config";
import Navbar from "./Navbar";
import "./FoodFact.css";
import Loading from "./Loading";

function FoodFact() {
  const [foodFact, setFoodFact] = useState();

  useEffect(() => {
    getFoodFact();
  }, []);

  const getFoodFact = async function () {
    const response = await fetch(
      `https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ req made");
    console.log(data.text);

    setFoodFact(data.text);
  };

  if (!foodFact) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (foodFact) {
    return (
      <div className="foodFact">
        {/* <Navbar /> */}
        <h1>{foodFact}</h1>
        <button onClick={getFoodFact}>One More!</button>
      </div>
    );
  }
}

export default FoodFact;
