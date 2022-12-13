import React, { useEffect, useState } from "react";
import { apiKey } from "./Config";
import { useParams } from "react-router";
import Recipe from "./Recipe";
import Loading from "./Loading";

function RecipeResult() {
  const [recipes, setRecipe] = useState({});

  const { id } = useParams();

  console.log("id ", id);

  const getRecipeById = async function (id) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ req made *******************");
    console.log(data);

    setRecipe(data);
  };

  useEffect(() => {
    getRecipeById(id);
  });

  if (Object.keys(recipes).length === 0 && recipes.constructor === Object) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!(Object.keys(recipes).length === 0 && recipes.constructor === Object)) {
    return (
      <div className="Recipe">
        <Recipe recipeData={recipes} />
      </div>
    );
  }
}

export default RecipeResult;
