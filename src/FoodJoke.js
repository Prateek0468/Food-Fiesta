import React, { useEffect, useState } from "react";
import { apiKey } from "./Config";
import Navbar from "./Navbar";
import "./FoodJoke.css";
import Loading from "./Loading";

function FoodJoke() {
  const [foodJoke, setFoodJoke] = useState();

  useEffect(() => {
    getFoodJoke();
  }, []);

  const getFoodJoke = async function () {
    const response = await fetch(
      `https://api.spoonacular.com/food/jokes/random?apiKey=${apiKey}`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ req made");
    console.log(data.text);

    setFoodJoke(data.text);
  };

  if (!foodJoke) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (foodJoke) {
    return (
      <div className="foodJoke">
        {/* <Navbar /> */}
        <h1>{foodJoke}</h1>
        <button onClick={getFoodJoke}>Once More!</button>
      </div>
    );
  }
}

export default FoodJoke;
