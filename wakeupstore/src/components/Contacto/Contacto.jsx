import { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { db } from "../../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "contactos"), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      });

      // Limpia los campos después del envío
      setName("");
      setEmail("");
      setMessage("");
      // Muestra el mensaje de confirmación
      setMensajeEnviado(true);
      // Oculta el mensaje de confirmación después de 5 segundos
      setTimeout(() => {
        setMensajeEnviado(false);
      }, 5000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="col-xs-12 col-md-9 col-lg-4 mx-auto align-items-center container">
      <h2>Contacto</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese su nombre"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ingrese su mensaje"
            required
          />
        </Form.Group>

        {mensajeEnviado && (
          <div className="alert alert-success mb-3" role="alert">
            ¡Mensaje enviado con éxito! Nos comunicaremos a la brevedad.
          </div>
        )}
        {!mensajeEnviado && (
          <Button
            className="mb-3 btn btn btn-btn btn-block btn-dark text-white rounded-pill"
            variant="primary"
            type="submit"
          >
            Enviar
          </Button>
        )}
      </Form>
    </div>
  );
};
