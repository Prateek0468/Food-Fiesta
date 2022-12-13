import React, { useState } from "react";
import { apiKey } from "./Config";
import { Link } from "react-router-dom";
import "./SearchRecipe.css";
import SearchIcon from "@material-ui/icons/Search";
import Navbar from "./Navbar";

function SearchRecipe() {
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  const getRecipe = async function (query) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ req made");
    console.log(data.results);

    setRecipe(data.results);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    getRecipe(search);
    setSearch("");
  };

  if (recipes.length < 1) {
    return (
      <div className="searchRecipe">
        {/* <Navbar /> */}
        {/* <h1>Search</h1> */}
        <form onSubmit={getSearch} className=" search__bar">
          <input
            type="text"
            className="search__input"
            value={search}
            onChange={updateSearch}
            placeholder="Search recipes"
          />
          <button type="submit" className="search__btn" onClick={getSearch}>
            <SearchIcon className="search__icon" />
          </button>
        </form>
      </div>
    );
  }

  if (recipes.length >= 1) {
    return (
      <div className="searchRecipe">
        {/* <Navbar /> */}
        {/* <h1>Search</h1> */}
        <form onSubmit={getSearch} className=" search__bar">
          <input
            type="text"
            className="search__input"
            value={search}
            onChange={updateSearch}
            placeholder="Search recipes"
          />
          <button type="submit" className="search__btn" onClick={getSearch}>
            <SearchIcon className="search__icon" />
          </button>
        </form>
        {console.log("this is recipe", recipes)}
        <div className="search__results">
          {recipes.map((recipe) => (
            <Link to={`/RecipeResult/${recipe.id}`}>
              <div className="search__result" itemId={recipe.id}>
                <div className="search__img__container">
                  <img className="search__img" src={recipe.image} alt="" />
                </div>
                <h2 className="search__title">{recipe.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchRecipe;
