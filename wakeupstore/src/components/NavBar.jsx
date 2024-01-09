import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import logo from "/imagenes/Logo/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export const NavBar = ({ carrito }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="ms-auto">
        <Navbar.Brand>
          <Link to="/">
            <img className="logonavbar img-fluid" src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link me-3">
              Inicio
            </Link>
            <Dropdown className="nav-item dropdown">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Productos
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-end">
                <Dropdown.Item as={Link} to="category/remeras">
                  Remeras
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="category/gorras">
                  Gorras
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/contacto" className="nav-link me-3">
              Contacto
            </Link>
            <Link to="/login" className="nav-link me-3">
              Registrarse / Iniciar Sesión
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="ms-auto" href="#carrito">
          <CartWidget carrito={carrito} />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};
