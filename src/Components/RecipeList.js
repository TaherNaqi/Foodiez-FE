import React, { useState } from "react";
import Listitem from "./Listitem";
import recipeStore from "../Stores/RecipeStore";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";
import { Container, Dropdown } from "react-bootstrap";
import categoryStore from "../Stores/CategoryStore";

function RecipeList() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  let recipeList = recipeStore.recipes
    .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
    .map((recipe) => <Listitem recipe={recipe} key={recipe._id} />);
  let categoryList = categoryStore.categories;
  const handleCategory = (c) => {
    // console.log(c);
    // recipeList = recipeStore.recipes.map((recipe) =>
    //   recipe.categories
    //     .filter((category) => category.name.toLowerCase() === c.toLowerCase())
    //     .map((recipe) => <Listitem recipe={recipe} key={recipe._id} />)
    // );
  };
  console.log(recipeList);
  return (
    <Container>
      <center>
        <div>
          <h2>Recipe List</h2>
        </div>
        <SearchBar setQuery={setQuery} />
        <div>
          <br />
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {categoryList.map((category) => (
                <Dropdown.Item onClick={handleCategory(category.name)}>
                  {category.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </center>

      <div className="card-flex ">{recipeList}</div>
    </Container>
  );
}

export default observer(RecipeList);
