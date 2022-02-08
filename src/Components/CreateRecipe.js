import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import recipeStore from "../stores/RecipeStore";
import "react-datepicker/dist/react-datepicker.css";
import categoryStore from "../Stores/CategoryStore";

export default function createRecipe(props) {
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    ingredient: "",
    categories: "",
    owner: "",
  });
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleCategory = () => {
    category;
  };
}
/*
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jam3ya);
    jam3yaStore.createJam3ya(jam3ya);
    setJam3ya({
      title: "",
      image: "",
      amount:"",
      limit: "",
      startDate: "",
      endDate:"",
    })
    props.closeModal(); // this is to close the modal that is shown
  };
  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create Jam3ya</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <InputGroup.Text>Title</InputGroup.Text>
                <Form.Control
                  value={jam3ya.title}
                  type="text"
                  name="title"
                  onChange={handleChange}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroup.Text>Image</InputGroup.Text>
                <Form.Control
                  value={jam3ya.image}
                  type="text"
                  name="image"
                  onChange={handleChange}
                />
              </InputGroup>
              <br />
             
              <InputGroup>
                <InputGroup.Text>Amount</InputGroup.Text>
                <Form.Control
                  type="number"
                  name="amount"
                  onChange={handleChange}
                  value={jam3ya.amount}
                />
                </InputGroup>
                <br />
              <InputGroup>
                <InputGroup.Text>Limit</InputGroup.Text>
                <Form.Control
                  type="number"
                  name="limit"
                  onChange={handleChange}
                  value={jam3ya.limit}
                />
                </InputGroup>
              <br />
              <InputGroup>
                <InputGroup.Text>Start Date</InputGroup.Text>
                <Form.Control
                type="date"
                name="startDate"
                onChange={handleChange}
                value={jam3ya.startDate}
                />
        
    
               
                </InputGroup>
              <br />
              <InputGroup>
                <InputGroup.Text>End Date</InputGroup.Text>
                <Form.Control
                type="date"
                name="endDate"
                onChange={handleChange}
                  value={jam3ya.endDate}
                />

                </InputGroup>
              <br />
        
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleSubmit}>
              Create Jam3ya
            </Button>
          </Modal.Footer>
        </Modal>
  );
}*/
