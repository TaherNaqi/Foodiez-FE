import { makeAutoObservable } from "mobx";
import api from "./api";
class IngredientStore {
  //array to store the Ingredients
  ingredient = [];
  constructor() {
    makeAutoObservable(this, {});
  }
  // Show all Ingredients from database to the user
  fetchIngredients = async () => {
    try {
      const response = await api.get("/PUT PATH HERE");
      this.ingredient = response.data;
    } catch (error) {
      console.log(console.error());
    }
  };
  createIngredient = async (newIngredient) => {
    try {
      const response = await api.post("/PUT PATH HERE", newIngredient);
      this.ingredient.push(response.data); //we will add the new ingredient to the list "ingredient array"
    } catch (e) {
      alert("cannot create new ingredient");
      console.log(e);
    }
  };
}

const ingredientStore = new IngredientStore();
ingredientStore.fetchIngredients();
export default ingredientStore;
