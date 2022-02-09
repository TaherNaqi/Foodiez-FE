import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
function Listitem({ recipe }) {
  console.log(recipe);
  return (
    <Card className="card-list">
      <Card.Body>
        <Link to={`/recipe/${recipe.slug}`} className="link">
          <Card.Img
            variant="top"
            src={
              recipe.image
                ? recipe.image
                : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
            }
            className="card-image"
          />
          <br />
          <br />
          <Card.Title>{recipe.name}</Card.Title>
        </Link>
        <Card.Text>Made by: {recipe.owner.username}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default observer(Listitem);
