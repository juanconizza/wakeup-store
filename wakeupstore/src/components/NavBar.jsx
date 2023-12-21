import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import logo from '/imagenes/Logo/logo.png';



export const NavBar = ({carrito}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="ms-auto">
        <Navbar.Brand>
          <a href="index.html">
            <img
              className="logonavbar img-fluid"
              src={logo}
              alt="logo"
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
            <Nav.Link className="ms-auto" href="#carrito"> <CartWidget carrito={carrito}/> </Nav.Link> 
        </Container>
        
    </Navbar>
  );
};
