import React from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import CreateRecipe from "./CreateRecipe";
import { useState } from "react";
import authStore from "../Stores/authStore";
import SignUpModal from "./SignUpModal";

function HomePage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signIn(user);
  };
  return (
    <div>
      {!authStore.user ? (
        <div class="login-box">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div class="user-box">
              <input
                name="username"
                value={user.username}
                type="text"
                onChange={handChange}
              />
              <label>Username</label>
            </div>
            <div class="user-box">
              <input
                name="password"
                value={user.password}
                type="password"
                onChange={handChange}
              />
              <label>Password</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Button variant="outline-secondary" onClick={handleSubmit}>
                Sign In
              </Button>
            </a>{" "}
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <SignUpModal />
            </a>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HomePage;
