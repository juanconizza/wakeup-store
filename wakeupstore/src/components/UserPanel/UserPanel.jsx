import { useContext, useState, useEffect } from "react";

import { LoginContext } from "../../context/LoginContext";
import { Container, Row, Col } from "react-bootstrap";

export const UserPanel = () => {
  const { user: userData } = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userData) {
      setIsLoading(false);
    }
  }, [userData]);

  return (
    <Container>
      <Row>
        <Col className="vh-100">
          {isLoading ? (
            <div className="loading-spinner">
              <div className="spinner-border mb-3" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="cargando">Cargando...</p>
            </div>
          ) : (
            <>
              <h2 className="mt-3">Bienvenid@ {userData?.nombre}</h2>
              <p>
                Próximamente verás más opciones dentro de tu panel de control.
              </p>
              <p style={{ fontSize: "3em" }}>&#128679;</p>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};
