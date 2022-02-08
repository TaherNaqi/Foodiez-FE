import { makeAutoObservable } from "mobx";
import api from "./api";
class CategoryStore {
  //array to store the categoryies
  categories = [];
  constructor() {
    makeAutoObservable(this, {});
  }
  // Show all categoryies from database to the user
  fetchCategoryies = async () => {
    try {
      const response = await api.get("/PUT PATH HERE");
      this.categories = response.data;
    } catch (error) {
      console.log(console.error());
    }
  };
  // user will be able to create a category which will contain a recipes
  createCategory = async (newCategory) => {
    try {
      const response = await api.post("/PUT PATH HERE", newCategory);
      this.categories.push(response.data); //we will add the new category to the list "category array"
    } catch (e) {
      alert("cannot create new category");
      console.log(e);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategorys();
export default categoryStore;
