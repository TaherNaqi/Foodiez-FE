import React, { useState } from "react";
import authStore from "../Stores/authStore";
import recipeStore from "../Stores/RecipeStore";
// import "./Card.css";
import { Button, Modal, Form, Container, InputGroup } from "react-bootstrap";
import Listitem from "./Listitem";
import { observer } from "mobx-react";
function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    username: authStore.user.username,
  });
  const handChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.update(user);
    setIsOpen(false);
  };
  let recipesList = recipeStore.recipe.filter(
    (r) => r.owner === authStore.user._id
  );
  const recipesListView = recipesList.map((recipe) => (
    <Listitem recipe={recipe} key={recipe._id} />
  ));
  return (
    <Container className="background">
      <Container>
        <Button
          variant="secondary"
          className="delete  align-right"
          onClick={() => setIsOpen(true)}
        >
          Update Profile
        </Button>
      </Container>

      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>Username</InputGroup.Text>
              <Form.Control
                name="username"
                value={user.username}
                type="text"
                placeholder="username here"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Password</InputGroup.Text>
              <Form.Control
                name="password"
                value={user.password}
                type="password"
                placeholder="password"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control
                name="email"
                value={user.email}
                type="text"
                placeholder="email here"
                onChange={handChange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="card-flex">{recipesListView}</div>
    </Container>
  );
}

export default observer(Profile);
