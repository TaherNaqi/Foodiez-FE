import React, { useState } from "react";
import authStore from "../Stores/authStore";
import recipeStore from "../Stores/RecipeStore";
// import "./Card.css";
import { Container, Badge } from "react-bootstrap";
import Listitem from "./Listitem";
import { observer } from "mobx-react";
function Profile() {
  const [user, setUser] = useState({
    username: authStore.user.username,
  });
  let recipesList = recipeStore.recipe
    .filter((r) => r.owner.id === authStore.user.id)
    .map((recipe) => <Listitem recipe={recipe} key={recipe._id} />);
  return (
    <Container className="background">
      <h1>
        <Badge bg="secondary">{authStore.user.username}'s recipes</Badge>
      </h1>
      <div className="card-flex">{recipesList}</div>
    </Container>
  );
}

export default observer(Profile);
