import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { vaciarCarrito, carrito, calcularTotal, eliminarItemCarrito } =
    useContext(CartContext);

  const BASE_URL = "/imagenes/Productos";

  return (
    //Creamos condicional para mostrar carrito vacío.
    carrito.length === 0 ? (
      <div className="container vh-100">
        <div className="titulo mt-5 mb-1">Carrito Vacío </div> <div className="mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg> </div>
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
                      <Button
                        onClick={() => eliminarItemCarrito(producto.id)}
                        variant="btn btn-block btn-danger text-white rounded-pill"
                      >
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
              <Link
                to="/checkout"
                className="mt-5 btn btn-block btn-success text-white rounded-pill"
              >
                Finalizar Compra
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    )
  );
};
