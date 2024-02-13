import { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "/imagenes/Logo/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

export const NavBar = ({ carrito }) => {
  const { logout, isLoggedIn } = useContext(LoginContext);
  const [showNotification, setShowNotification] = useState(false); //Notificacion para Logout

  useEffect(() => {
    if (showNotification) {
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Oculta la notificación después de 3 segundos
      return () => clearTimeout(timeout);
    }
  }, [showNotification]);

  const handleLogout = () => {
    logout();
    setShowNotification(true); // Muestra la notificación al cerrar sesión
  };

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
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/panel" className="nav-link me-3">
                  Mi Cuenta
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className="nav-link me-3">
                  Cerrar Sesión
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className="nav-link me-3">
                Registrarse / Iniciar Sesión
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="ms-auto" as={Link} to="/carrito">
          <CartWidget carrito={carrito} />
        </Nav.Link>
      </Container>
      {showNotification && (
        <div className="notificationLogout">
          ¡Sesión Cerrada! Nos vemos pronto...{" "}
          <span style={{ fontSize: "30px" }}>&#128075;</span>
        </div>
      )}
    </Navbar>
  );
};
