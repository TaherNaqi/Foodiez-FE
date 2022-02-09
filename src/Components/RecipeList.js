import React, { useState } from "react";
import Listitem from "./Listitem";
// import CreateJam3yaModal from "./CreateJam3yaModal";
import recipeStore from "../Stores/RecipeStore";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";
import { Container } from "react-bootstrap";

function RecipeList() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  let recipeList = recipeStore.recipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLocaleLowerCase())
    )
    .map((recipe) => <Listitem recipe={recipe} key={recipe._id} />);
  return (
    <Container className="background">
      <SearchBar setQuery={setQuery} />
      <center>
        <div
          className="chatlist__heading"
          style={{ marginBottom: "40px", color: "white" }}
        >
          <h2>Recipe List</h2>
        </div>
      </center>
      <div className="card-flex ">{recipeList}</div>
    </Container>
  );
}

export default observer(RecipeList);
