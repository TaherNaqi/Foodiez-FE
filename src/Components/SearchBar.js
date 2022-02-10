import React from "react";
import recipeStore from "../Stores/RecipeStore";
import Listitem from "./Listitem";
import { useState } from "react";
const SearchBar = ({ setRecipeList }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
    const recipes = recipeStore.recipes
      .filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      )
      .map((recipe) => <Listitem recipe={recipe} key={recipe._id} />);
    setRecipeList(recipes);
  };
  return (
    <div className="searchar">
      <input
        className="searchbar"
        onChange={handleChange}
        placeholder="search by name"
      />
    </div>
  );
};

export default SearchBar;
