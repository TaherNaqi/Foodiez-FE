import { makeAutoObservable } from "mobx";
import api from "./api";
class CategoryStore {
  //array to store the categoryies
  category = [];
  constructor() {
    makeAutoObservable(this, {});
  }
  // Show all categoryies from database to the user
  fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      this.category = response.data;
    } catch (error) {
      console.log(console.error());
    }
  };
  // user will be able to create a category which will contain a recipes
  createCategory = async (newCategory) => {
    try {
      const response = await api.post("//categories", newCategory);
      this.category.push(response.data); //we will add the new category to the list "category array"
    } catch (e) {
      alert("cannot create new category");
      console.log(e);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategories();
export default categoryStore;
