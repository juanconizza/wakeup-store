import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { vaciarCarrito, carrito, calcularTotal, eliminarItemCarrito } = useContext(CartContext);

  const BASE_URL = "/imagenes/Productos";

  return (
    //Creamos condicional para mostrar carrito vacío.
    carrito.length === 0 ? (
      <div className="container vh-100">
        <div className="titulo mt-5 mb-5">Carrito Vacío :(</div>
        <Link to="/" className="btn btn-block btn-dark text-white rounded-pill">
          Ir al Inicio
        </Link>
      </div>
    ) : (
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="mb-5 titulo">Resumen del Carrito</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((producto) => (
                  <tr key={producto.id}>
                    <td>
                      <img
                        className="img-thumbnail w-25"
                        src={`${BASE_URL}/${producto.imagen}`}
                        alt={producto.nombre}
                      />
                    </td>
                    <td>{producto.titulo}</td>
                    <td>{producto.cantidad}</td>
                    <td>${producto.precio.toFixed(2)}</td>
                    <td>${(producto.cantidad * producto.precio).toFixed(2)}</td>
                    <td>
                      <Button onClick={() => eliminarItemCarrito(producto.id)} variant="btn btn-block btn-danger text-white rounded-pill">
                        Eliminar Item
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="text-right mb-5 ">
              <div className="border pt-3 text-center">
                <h4 className="mb-3">
                  Total de la Compra:{" "}
                  <span className="text-success">
                    ${calcularTotal().toFixed(2)}
                  </span>
                </h4>
              </div>
              <Button
                className="mt-5 me-4"
                variant="btn btn-block btn-danger text-white rounded-pill"
                onClick={vaciarCarrito}
              >
                Vaciar Carrito
              </Button>
              <Link to="/checkout" className="mt-5 btn btn-block btn-success text-white rounded-pill">
          Finalizar Compra
        </Link>
            </div>
          </Col>
        </Row>
      </Container>
    )
  );
};
