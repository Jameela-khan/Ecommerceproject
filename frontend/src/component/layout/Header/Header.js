import React from "react";
import "./Header.css";
// import { ReactNavbar } from "overlay-navbar";
import Logo from "../../../images/logo4.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Header = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">
      <img
              src={Logo}
              width="100"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/products">Product</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/login"><i class="fa-solid fa-user"></i></Nav.Link>
        <Nav.Link href="/Search"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
        <Nav.Link href="/cart"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
};


export default Header
