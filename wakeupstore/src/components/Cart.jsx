import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Cart = () => {

const {vaciarCarrito} = useContext(CartContext)
    
  return (
    <Container className="mt-5">
    <Row>
      <Col>
        <h2 className="mb-5 titulo" >Resumen del Carrito</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button variant="btn btn-block btn-danger text-white rounded-pill">Eliminar Item</Button>
                </td>
              </tr>
           
          </tbody>
        </Table>
        <div className="text-right mb-5">
          <h4 className="mb-3">Total de la Compra: $ </h4>
          <Button className='me-4' variant="btn btn-block btn-danger text-white rounded-pill" onClick={vaciarCarrito}>Vaciar Carrito</Button>
          <Button variant="btn btn-block btn-success text-white rounded-pill">Realizar Pedido</Button>
          </div>
      </Col>
    </Row>
  </Container>
  )
}
