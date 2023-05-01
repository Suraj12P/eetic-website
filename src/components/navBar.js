// NAVBAR 
/* ============================================================================================================== */

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./css/navBar.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./site_images/eeti foundation-black.svg";

function navBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <Link to="/">
            <Image
              className="nav-logo"
              // src={require("./site_images/eeti foundation-black.svg")}
              src={logo}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="navText">
              Home
            </Nav.Link>
            <Nav.Link href="/events" className="navText">
              Events
            </Nav.Link>
            <Nav.Link href="/resources" className="navText">
              Resources
            </Nav.Link>
            <Nav.Link href="/aboutus" className="navText">
              About Us
            </Nav.Link>
            <Nav.Link href="/team" className="navText">
              Team
            </Nav.Link>
            <Nav.Link href="/careers" className="navText">
              Careers
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}

            {/*================= sign in / sign up================= */}

            {/* THIS PART OF CODE IS COMMENTED 
                  SHOULD BE UNCOMMENTED WHEN SIGN IN AND SIGN UP PAGES ARE CREATED
                   */}
             

            {/* <Nav.Link href="#signIn" className="navText">
              <Button className="signInUpButton signIn">Sign In</Button>
            </Nav.Link>
            <Nav.Link href="#signUp" className="navText ">
              <Button className=" signUp signInUpButton">Sign Up</Button>
            </Nav.Link> */}

            {/* ====================================================== */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navBar;
