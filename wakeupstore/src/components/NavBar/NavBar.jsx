import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = ({cantidadItemsCarrito}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="ms-auto">
        <Navbar.Brand>
          <a href="index.html">
            <img
              className="logonavbar img-fluid"
              src="./imagenes/Logo/logo.png"
              alt=""
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="me-3" href="#inicio">
              Inicio
            </Nav.Link>
            <Nav.Link className="me-3" href="#remeras">
              Remeras
            </Nav.Link>
            <Nav.Link className="me-3" href="#contacto">
              Contacto
            </Nav.Link>
            <Nav.Link className="me-3" href="#login">
              Registrarse / Iniciar Sesión
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Nav.Link className="ms-auto" href="#carrito"> <CartWidget carrito={cantidadItemsCarrito}/> </Nav.Link> 
        </Container>
        
    </Navbar>
  );
};
