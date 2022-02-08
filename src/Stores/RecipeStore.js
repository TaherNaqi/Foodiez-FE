import { makeAutoObservable } from "mobx";
import api from "./api";
class RecipeStore {
  //array to store the recipes
  recipes = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }
  // Show all recipes from database to the user
  fetchRecipes = async () => {
    try {
      const response = await api.get("/recipes");
      this.recipes = response.data;
      this.loading = false;
    } catch (error) {
      console.log(console.error());
    }
  };
  // Show specific recipe from database by using id
  fetchRecipe = async (_id) => {
    try {
      //using param and _id that the user wrote to show the write recipe
      const response = await api.get(`/recipes/:${_id}`);
      this.recipes = response.data;
    } catch (error) {
      console.log(console.error());
    }
  };
  // user will be able to create a recipe
  createRecipe = async (newRecipe) => {
    try {
      const response = await api.post("/recipes", newRecipe);
      this.recipes.push(response.data); //we will add the new recipe to the list "recipe array"
    } catch (e) {
      alert("cannot create new recipe");
      console.log(e);
    }
  };
  updateRecipe = async (recipe, recipeId) => {
    try {
      const response = await api.put(`/recipe/${recipeId}`, recipe);
      const tempRecipe = this.recipes.map((recipeElement) =>
        recipeElement.id === recipeId ? response.data : recipeElement
      );
      this.recipes = tempRecipe;
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
