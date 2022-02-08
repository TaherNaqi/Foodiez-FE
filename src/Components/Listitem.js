import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
// import "./Card.css"
function Listitem({ recipe }) {
  return (
    <Card
      style={{
        width: "18rem",
        border: "5px solid",
        borderRadius: "50px",
        margin: "20px",
      }}
      className="cards__item__img"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <Card.Body>
        <Link to={`/recipe/${recipe.slug}`}>
          <Card.Img variant="top" src={recipe.image} className="img-card" />

          <Card.Title>{recipe.name}</Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default observer(Listitem);
