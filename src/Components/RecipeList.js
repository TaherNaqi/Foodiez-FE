import React, { useState, useEffect } from "react";
import Listitem from "./Listitem";
import recipeStore from "../Stores/RecipeStore";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";
import { Container } from "react-bootstrap";
import categoryStore from "../Stores/CategoryStore";
import CreateRecipe from "./CreateRecipe";
import authStore from "../Stores/authStore";

function RecipeList() {
  const [recipeList, setRecipeList] = useState();

  useEffect(() => {
    setRecipeList(
      recipeStore.recipes.map((recipe) => (
        <Listitem recipe={recipe} key={recipe._id} />
      ))
    );
  }, []);

  const handleCategory = (c) => {
    const catrgory = categoryStore.categories.find(
      (category) => category._id == c.target.value
    );
    setRecipeList(
      catrgory.recipes.map((recipe) => (
        <Listitem recipe={recipe} key={recipe._id} />
      ))
    );
  };
  return (
    <Container>
      <center>
        <div>
          <h2>Recipe List</h2>
        </div>
        <SearchBar setRecipeList={setRecipeList} />{" "}
        {authStore.user ? <CreateRecipe /> : <></>}
        <div>
          <br />

          <select onChange={handleCategory}>
            <option>Category</option>
            {categoryStore.categories.map((category) => (
              <option value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>
      </center>

      <div className="card-flex ">{recipeList}</div>
    </Container>
  );
}

export default observer(RecipeList);
