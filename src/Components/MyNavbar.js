import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link, NavLink, Route } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";
// import { Link, NavLink, Route } from "react-router-dom";
function MyNavbar() {
  {
    return (
      <>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Container>
            <Nav.Item class="navbar-brand">
              <span class="text-uppercase font-weight-bold">
                Show the world your magic{" "}
                {authStore.user ? authStore.user.username : ""}
              </span>
            </Nav.Item>

            {/* <Navbar.Brand href="#home">Lets Save Your Money {authStore.user ? authStore.user.username : ""}</Navbar.Brand> */}
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/recipelist">
                Recipe List
              </Nav.Link>

              {authStore.user ? (
                <>
                  <Nav.Link as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Item>
                    <Button
                      variant="outline-secondary"
                      onClick={authStore.logout}
                    >
                      Logout
                    </Button>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Nav.Item className="mx-1">
                    <SignUpModal />
                  </Nav.Item>
                  <Nav.Item className="mx-1">
                    <SignInModal />
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default observer(MyNavbar);
