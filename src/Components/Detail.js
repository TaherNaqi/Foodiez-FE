import React, { useState } from "react";
import { useParams } from "react-router-dom";
import recipeStore from "../Stores/RecipeStore";
import { Container, Card, Button } from "react-bootstrap";
import { observer } from "mobx-react";

function Detail() {
  const slug = useParams().slug;
  if (recipeStore.loading) {
    return <h1>Loading</h1>;
  }
  let recipe = recipeStore.recipes.find((recipe) => recipe.slug === slug);

  return (
    <Container fluid>
      <Card className="d-flex align-items-center ">
        <img className="img-detail" src={recipe.image} />

        <Card.Title>
          <h3 className="card-title">Recipe Details</h3>
        </Card.Title>

        <Card.Body>
          <Card.Title>Recipe name: {recipe.name}</Card.Title>
          <Card.Title>Recipe creator: {recipe.owner.username}</Card.Title>
          <Card.Title>
            Ingredients:&nbsp;
            {recipe.ingredients.map((ingredient) => (
              <>{ingredient.name}&nbsp;</>
            ))}
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default observer(Detail);
