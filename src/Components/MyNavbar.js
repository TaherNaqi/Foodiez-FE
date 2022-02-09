import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <span class="font-weight-bold">Foodiez</span>
            </Nav.Item>
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
                    <Button variant="danger" onClick={authStore.logout}>
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
