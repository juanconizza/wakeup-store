import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm, Controller } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import listaProvincias from "../helpers/listaProvincias";
import gracias from "/imagenes/gracias.webp"

export const Checkout = () => {
  const { vaciarCarrito, carrito, calcularTotal } = useContext(CartContext);

const [pedidoId, setpedidoId] = useState("")
const [nombreCliente, setnombreCliente] = useState("")

  //Llamamos a useForms
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  // Manejamos la data del submit y le sumamos los productos y el total del carrito.
  const onSubmit = (data) => {
    const pedido = {
      fechaDeCompra: serverTimestamp(),
      cliente: data,
      productos: carrito,
      total: calcularTotal(),
    };

    const pedidoRef = collection(db, "pedidos")
    addDoc(pedidoRef, pedido)
        .then ((doc) => {
            setpedidoId(doc.id)
            setnombreCliente(data.firstName)
        })

    //vaciamos el carrito luego del pedido. 
    vaciarCarrito();

  };

  //Early Return al momento de la finalización del pedido//

  if (pedidoId) {
    return (
        <div className="container vh-100 mt-5">
            <img className="graciasManito mb-4" src={gracias} alt="gracias por la compra" />
            <h2>¡Gracias por Tu Compra {nombreCliente}!</h2>
            <h4 className="mt-2">Tu Número de pedido es: {pedidoId}</h4>
        </div>
    )
    
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="container">
      <h2>Ya casi terminás tu compra!</h2>
      <Row>
        <Col xs={12} md={6} lg={4} className="align-items-center mx-auto">
          <Form.Group controlId="firstName">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              {...register("firstName", { required: "Campo obligatorio" })}
            />
            <Form.Text className="text-danger">
              {errors.firstName && errors.firstName.message}
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4} className="align-items-center mx-auto">
          <Form.Group controlId="lastName">
            <Form.Label>Apellido:</Form.Label>
            <Form.Control
              {...register("lastName", { required: "Campo obligatorio" })}
            />
            <Form.Text className="text-danger">
              {errors.lastName && errors.lastName.message}
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Col xs={12} md={6} lg={4} className="align-items-center mx-auto">
        <Form.Group controlId="address">
          <Form.Label>Dirección de Entrega:</Form.Label>
          <Form.Control
            {...register("address", { required: "Campo obligatorio" })}
          />
          <Form.Text className="text-danger">
            {errors.address && errors.address.message}
          </Form.Text>
        </Form.Group>
      </Col>

      <Row>
        <Col xs={12} md={6} lg={4} className="align-items-center mx-auto">
          <Form.Group controlId="postalCode">
            <Form.Label>Código Postal:</Form.Label>
            <Form.Control
              {...register("postalCode", { required: "Campo obligatorio" })}
            />
            <Form.Text className="text-danger">
              {errors.postalCode && errors.postalCode.message}
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4} className="align-items-center mx-auto">
          <Form.Group controlId="province">
            <Form.Label>Provincia</Form.Label>
            <Controller
              render={({ field }) => (
                <Form.Control as="select" {...field}>
                  <option value="" disabled>
                    Seleccione una provincia
                  </option>
                  {listaProvincias.map((province, index) => (
                    <option key={index} value={province}>
                      {province}
                    </option>
                  ))}
                </Form.Control>
              )}
              control={control}
              name="province"
              rules={{ required: "Campo obligatorio" }}
            />
            <Form.Text className="text-danger">
              {errors.province && errors.province.message}
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Col xs={12} md={6} lg={4} className="align-items-center mx-auto">
        <Form.Group controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            {...register("phone", { required: "Campo obligatorio" })}
          />
          <Form.Text className="text-danger">
            {errors.phone && errors.phone.message}
          </Form.Text>
        </Form.Group>
      </Col>
      <Col xs={12} md={6} lg={4} className="align-items-center mx-auto">
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register("email", {
              required: "Campo obligatorio",
              pattern: /^\S+@\S+$/i,
            })}
          />
          <Form.Text className="text-danger">
            {errors.email && errors.email.message}
          </Form.Text>
        </Form.Group>
      </Col>
      <Col xs={12} md={6} lg={4} className="align-items-center mx-auto">
        <Form.Group controlId="notes">
          <Form.Label>Notas (Opcional):</Form.Label>
          <Form.Control as="textarea" rows={3} {...register("notes")} />
        </Form.Group>
      </Col>
      <Button
        className="mt-4 mb-4 btn btn-block btn-success text-white rounded-pill"
        variant="primary"
        type="submit"
      >
        Confirmar Compra
      </Button>
    </Form>
  );
};
