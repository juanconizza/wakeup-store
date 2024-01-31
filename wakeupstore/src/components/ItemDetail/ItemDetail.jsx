import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const BASE_URL = "/imagenes/Productos";

export const ItemDetail = ({ producto }) => {
  const [showNotification, setShowNotification] = useState(false);
  const { handleCantidadSeleccionada } = useContext(CartContext);

  const onCantidadChange = (cantidad) => {
    handleCantidadSeleccionada(producto, cantidad);

    // Mostrar la notificación de agregado.
    setShowNotification(true);

    // Ocultar notificación después de 3 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="container-md">
      <div className="card">
        <div className="row g-0">
          {producto && (
            <>
              <div className="col-md-4">
                <img
                  src={`${BASE_URL}/${producto.imagen}`}
                  className="card-img-top"
                  alt={producto.titulo}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title tituloscard">{producto.titulo}</h5>
                  <p className="card-text descripcioncard">
                    {producto.descripcion}
                  </p>
                  <p className="card-text">
                    <span className="preciocard">
                      Precio ${producto.precio}
                    </span>
                  </p>
                  <p className="mb-0">Cantidad:</p>
                  <ItemCount producto={producto} onCantidadChange={onCantidadChange} />
                  {showNotification && (
                    <div className="notification">
                      ¡Producto agregado al Carrito! &#128512;
                    </div>
                  )}
                  <p className="mt-4"> Stock Disponible: {producto.stock} </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="text-center mt-3 mb-3">
      <Link to="/" className="btn btn-block btn-dark text-white rounded-pill">
          Volver
        </Link>
      </div>
    </div>
  );
};
