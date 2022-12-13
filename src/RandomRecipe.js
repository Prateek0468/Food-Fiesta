import React, { useEffect, useState } from "react";
import { apiKey } from "./Config";
import Recipe from "./Recipe";
import Loading from "./Loading";
function RandomRecipe() {
  const [randomRecipe, setRandomRecipe] = useState({});
  // const [similarRecipe, setSimilarRecipe] = useState({});
  // const [recipeNutrition, setRecipeNutrition] = useState({});

  const getRandomRecipe = async function () {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ req made");
    console.log(data.recipes[0]);

    setRandomRecipe(data.recipes[0]);
    getSimilarRecipe(data.id);
    getRecipeNutrition(data.id);
  };

  const getSimilarRecipe = async function (id) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/similar`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ simi req made");
    console.log(" similar", data);
  };

  const getRecipeNutrition = async function (id) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/nutritionWidget`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ nutri req made");
    console.log(" similar", data);
  };

  useEffect(() => {
    getRandomRecipe();
  }, []);

  //

  if (
    Object.keys(randomRecipe).length === 0 &&
    randomRecipe.constructor === Object
  ) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (
    !(
      Object.keys(randomRecipe).length === 0 &&
      randomRecipe.constructor === Object
    )
  ) {
    return (
      <div className="randomRecipe">
        <Recipe recipeData={randomRecipe} />
      </div>
    );
  }
}

export default RandomRecipe;
