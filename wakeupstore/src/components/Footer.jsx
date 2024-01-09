import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "/src/App.css"; 

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={4} className="text-center mb-3">
            <a href="https://www.instagram.com/">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=+5493515921209&text=Hola,%20me%20interes%C3%B3%20tu%20web%20de%20WakeUp!">
              <FaWhatsapp className="social-icon" />
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <p className="rights">
              WakeUp! - Todos los derechos reservados 2024
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
