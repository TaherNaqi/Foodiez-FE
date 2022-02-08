import { makeAutoObservable } from "mobx";
import api from "./api";
class IngredientStore {
  //array to store the Ingredients
  ingredients = [];
  constructor() {
    makeAutoObservable(this, {});
  }
  // Show all Ingredients from database to the user
  fetchIngredients = async () => {
    try {
      const response = await api.get("/ingredients");
      this.ingredient = response.data;
    } catch (error) {
      console.log(console.error());
    }
  };
  createIngredient = async (newIngredient) => {
    try {
      const response = await api.post("/ingredients", newIngredient);
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
