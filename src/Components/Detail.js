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
    <Container fluid className="card-list">
      <Card className="d-flex align-items-center detail-margin ">
        <img
          className="img-detail"
          src={
            recipe.image
              ? recipe.image
              : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
          }
          alt="recipe"
        />

        <Card.Title className="detail-title">
          <h4>Recipe Details</h4>
        </Card.Title>

        <Card.Body>
          <Card.Title>Recipe name: {recipe.name}</Card.Title>
          <Card.Title>Recipe creator: {recipe.owner.username}</Card.Title>
          <Card.Title>
            Ingredients:
            {recipe.ingredients.map((ingredient) => (
              <>{ingredient.name}</>
            ))}
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default observer(Detail);
