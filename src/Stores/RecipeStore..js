import { makeAutoObservable } from "mobx";
import api from "./api";
class RecipeStore {
  //array to store the recipes
  recipe = [];
  constructor() {
    makeAutoObservable(this, {});
  }
  // Show all recipes from database to the user
  fetchRecipes = async () => {
    try {
      const response = await api.get("/recipes");
      this.recipe = response.data;
    } catch (error) {
      console.log(console.error());
    }
  };
  // Show specific recipe from database by using id
  fetchRecipe = async (_id) => {
    try {
      //using param and _id that the user wrote to show the write recipe
      const response = await api.get(`/resipes/:${recipeId}`, _id);
      this.recipe = response.data;
    } catch (error) {
      console.log(console.error());
    }
  };
  // user will be able to create a recipe
  createRecipe = async (newRecipe) => {
    try {
      const response = await api.post("/recipes", newRecipe);
      this.recipe.push(response.data); //we will add the new recipe to the list "recipe array"
    } catch (e) {
      alert("cannot create new recipe");
      console.log(e);
    }
  };
  updateRecipe = async (recipe, recipeId) => {
    try {
      const response = await api.put(`/recipe/${recipeId}`, recipe);
      const temprecipe = this.recipe.map((recipeElement) =>
        recipeElement.id === recipeId ? response.data : recipeElement
      );
      this.recipe = temprecipe;
    } catch (error) {
      console.log(error);
    }
  };
}

const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();
export default recipeStore;

//user will be able to delete his own recipe
//   deleteRecipe = async (recipeId) => {
//     try {

//       await api.delete(
//        `recipe/${recipeId}`
//       );
//       const temprecipe = this.recipe.filter((recipe) => recipe.id !== recipeId);
//       this.recipe = temprecipe;
//     } catch (e) {
//       alert("Cannot delete the recipe");
//     }

//   };
