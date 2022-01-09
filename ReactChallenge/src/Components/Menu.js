import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Menu() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" style={{ marginLeft: "50px" }}>
          React Challenge
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            {<Nav.Link>Salir</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
        <div style={{ marginRight: "50px" }}>Bienvenido</div>
      </Navbar>
    </>
  );
}
export default Menu;
