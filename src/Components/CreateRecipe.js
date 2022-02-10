// import React, { useState } from "react";
// import { Form, Modal, Button } from "react-bootstrap";
// import recipeStore from "../Stores/RecipeStore";
// import categoryStore from "../Stores/CategoryStore";
// import { observer } from "mobx-react-lite";
// import ingredientStore from "../Stores/IngredientStore";
// function CreateRecipe() {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [checkedCategory, setCheckedCategory] = useState(false);
//   const [checkedIngredient, setCheckedIngredient] = useState(false);
//   const categoryOptions = categoryStore.categories.map((Element) => (
//     <option value={Element._id} name={Element.name}>
//       {Element.name}
//     </option>
//   ));
//   const ingredientOptions = ingredientStore.ingredients.map((Element) => (
//     <option value={Element._id} name={Element.name}>
//       {Element.name}
//     </option>
//   ));
//   const category = categoryStore.categories.map((category) =>
//     console.log(category)
//   );
//   const givingCategory = true;
//   const [recipe, setRecipe] = useState({
//     name: "",
//     image: "",
//     ingredients: [],
//     categories: [],
//   });
//   const handleChange = (e) => {
//     setRecipe({ ...recipe, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e, newCategory) => {
//     e.preventDefault();
//     recipeStore.createRecipe(recipe);
//     setRecipe({
//       name: "",
//       image: "",
//       ingredients: [],
//       categories: [],
//     });
//     handleClose(); // this is to close the modal that is shown
//   };
//   const changeCategory = (e) => {
//     recipe.categories.push(e.target.value);
//     console.log(recipe);
//   };
//   const handleBlurC = (e) => {
//     categoryStore.createCategory({ name: e.target.value });
//     changeCategory(e);
//   };
//   const handleBlurI = (e) => {
//     console.log(e.target.value);
//     let ingredientOfBlur = { name: e.target.value };
//     console.log(ingredientOfBlur);
//     ingredientStore.createIngredient(ingredientOfBlur);
//     changeIngredient(e);
//   };
//   const changeIngredient = (e) => {
//     recipe.ingredients.push(e.target.value);
//   };
//   const handleCategory = () => {
//     setCheckedCategory(!checkedCategory);
//   };
//   const handleIngredient = () => {
//     setCheckedIngredient(!checkedIngredient);
//   };

//   return (
//     <>
//       <Button className="createButton" onClick={handleShow}>
//         Create Recipe
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title> Recipe!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label>Recipe</Form.Label>
//               <Form.Control
//                 onChange={handleChange}
//                 name="name"
//                 type="text"
//                 placeholder="Recipe Name"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>images</Form.Label>
//               <Form.Control
//                 onChange={handleChange}
//                 name="image"
//                 type="text"
//                 placeholder="image address"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>New Category</Form.Label>
//               <input onChange={handleCategory} name="check" type="checkbox" />
//               <Form.Label>New Ingredients</Form.Label>
//               <input onChange={handleIngredient} name="check" type="checkbox" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <p>
//                 {checkedIngredient ? (
//                   <Form.Control
//                     onBlur={handleBlurI}
//                     name="ingredients"
//                     type="text"
//                     placeholder="new ingredient name"
//                   />
//                 ) : (
//                   <select onChange={changeIngredient} name="ingredients">
//                     {ingredientOptions}
//                   </select>
//                 )}
//               </p>

//               <p>
//                 {checkedCategory ? (
//                   <Form.Control
//                     onBlur={handleBlurC}
//                     name="category"
//                     type="text"
//                     placeholder="new category Name"
//                   />
//                 ) : (
//                   <select onChange={changeCategory} name="categories">
//                     {categoryOptions}
//                   </select>
//                 )}
//               </p>
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Submit!
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default observer(CreateRecipe);
import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import recipeStore from "../Stores/RecipeStore";
import categoryStore from "../Stores/CategoryStore";
import { observer } from "mobx-react-lite";
import ingredientStore from "../Stores/IngredientStore";

function CreateRecipe() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [checkedCategory, setCheckedCategory] = useState(false);
  const [checkedIngredient, setCheckedIngredient] = useState(false);
  const categoryOptions = categoryStore.categories.map((Element) => (
    <option value={Element._id} name={Element.name}>
      {Element.name}
    </option>
  ));
  const ingredientOptions = ingredientStore.ingredients.map((Element) => (
    <option value={Element._id} name={Element.name}>
      {Element.name}
    </option>
  ));
  const category = categoryStore.categories.map((category) =>
    console.log(category)
  );

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    ingredients: [],
    categories: [],
  });
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, newCategory) => {
    e.preventDefault();
    recipeStore.createRecipe(recipe);
    setRecipe({
      name: "",
      image: "",
      ingredients: [],
      categories: [],
    });

    handleClose(); // this is to close the modal that is shown
  };
  const changeCategory = (e) => {
    recipe.categories.push(e.target.value);
    console.log(recipe);
  };
  const handleBlurC = (e) => {
    let categoryOfBlur = { name: e.target.value };

    categoryStore.createCategory(categoryOfBlur);
    setCheckedCategory(false);
  };
  const handleBlurI = (e) => {
    const ingredientOfBlur = { name: e.target.value };
    ingredientStore.createIngredient(ingredientOfBlur);
  };
  const changeIngredient = (e) => {
    recipe.ingredients.push(e.target.value);
  };
  const handleCategory = () => {
    setCheckedCategory(!checkedCategory);
  };
  const handleIngredient = () => {
    setCheckedIngredient(!checkedIngredient);
  };

  return (
    <>
      <Button className="createButton" onClick={handleShow}>
        Create Recipe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Recipe!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Recipe</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Recipe Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>images</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="image"
                type="text"
                placeholder="image address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Category</Form.Label>
              <input onChange={handleCategory} name="check" type="checkbox" />
              <Form.Label>New Ingredients</Form.Label>
              <input onChange={handleIngredient} name="check" type="checkbox" />
            </Form.Group>
            <Form.Group className="mb-3">
              <p>
                {checkedIngredient ? (
                  <Form.Control
                    onBlur={handleBlurI}
                    name="ingredients"
                    type="text"
                    placeholder="new ingredient name"
                  />
                ) : (
                  <select onChange={changeIngredient} name="ingredients">
                    <option>--choose a Category--</option>
                    {ingredientOptions}
                  </select>
                )}
              </p>

              <p>
                {checkedCategory ? (
                  <Form.Control
                    onBlur={handleBlurC}
                    name="category"
                    type="text"
                    placeholder="new category Name"
                  />
                ) : (
                  <select onChange={changeCategory} name="categories">
                    <option>--choose a Category--</option>
                    {categoryOptions}
                  </select>
                )}
              </p>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default observer(CreateRecipe);
