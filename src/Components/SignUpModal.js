import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import React, { useState } from "react";
import authStore from "../Stores/authStore";

function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signUp(user);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        className="tra"
        variant="outlined-secondary"
        onClick={() => setIsOpen(true)}
      >
        Sign Up
      </Button>

      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <div class="login-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div class="user-box">
              <input
                name="username"
                value={user.username}
                type="text"
                placeholder="username here"
                onChange={handChange}
              />
              <label>Username</label>
            </div>
            <div class="user-box">
              <input
                name="password"
                value={user.password}
                type="password"
                placeholder="password here"
                onChange={handChange}
              />
              <label>Password</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Button
                className="tra"
                variant="outline-secondary"
                onClick={handleSubmit}
              >
                Sign Up
              </Button>{" "}
              <SignUpModal />
            </a>
          </form>
        </div>
      </Modal>
    </>
  );
}
export default SignUpModal;
