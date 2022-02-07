import { makeAutoObservable } from "mobx";
import api from "./api";
import jwtDecode from "jwt-decode";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this, {});
  }
  //set a token to user
  setUser = (token) => {
    api.defaults.headers.common.Authorization = `Bearer${token}`;
    this.user = jwtDecode(token);
    localStorage.setItem("myToken", token);
  };
  //a function that will allow user to sign up
  signUpMethod = async (user) => {
    try {
      const response = await api.post("/signup", user);
      //giving the user a token
      localStorage.setItem("myToken", response.data.token);
      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      this.user = jwtDecode(response.data.token);
      console.log(user);
    } catch (error) {
      //to show us a error if try didnt work
      console.log(error);
    }
  };

  signInMethod = async (user) => {
    try {
      const response = await api.post("/signin", user);
      //giving the user a token
      localStorage.setItem("myToken", response.data.token);
      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      this.user = jwtDecode(response.data.token);
    } catch (error) {
      alert(error);
    }
  };
  //a function that will allow user to log out from his user
  logout = () => {
    this.user = null;
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
  };

  //a function that will check if the token still didnt expire or the user didnt log out, then user still signed in
  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      let user = jwtDecode(token);
      if (user.exp > currentTime) {
        this.setUser(token);
      } else {
        alert("You are now logged out automatically. Please sign in again!");
        this.logout();
      }
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
