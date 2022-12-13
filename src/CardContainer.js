import React from "react";
import "./CardContainer.css";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardContainer() {
  return (
    <div className="card__container">
      <Link to="/FoodJoke">
        <Card
          cardName="Food Jokes"
          img="https://image.freepik.com/free-vector/pizza-illustration_8319-36.jpg"
        />
      </Link>
      <Link to="/RandomRecipe">
        <Card
          cardName="Random Recipe"
          img="https://media.illustrationx.com/images/artist/SamyLoewe/127847/crop/500/3760-127847.jpg"
        />
      </Link>
      <Link to="/FoodFact">
        <Card
          cardName="Food Facts"
          img="https://media.illustrationx.com/images/artist/SebastianIwohn/93219/crop/500/3409-93219.jpg"
        />
      </Link>
      <Link to="/SearchRecipe">
        <Card
          cardName="Search Recipe"
          img="https://media.illustrationx.com/images/artist/Pintachan/123200/crop/500/3622-123200.jpg"
        />
      </Link>

      <Link to="/FoodInfo">
        <Card
          cardName="Food Info"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQI70twWz1-mBcmR6Ol6fozJFxzvf3z_LoQ&usqp=CAU"
        />
      </Link>
    </div>
  );
}

export default CardContainer;
