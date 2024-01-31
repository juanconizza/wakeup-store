import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const ItemCount = ({ producto, onCantidadChange }) => {
  //Creamos un estado para determinar la cantidad selecionada con logica conectada al stock disponible. //
  const [cantidad, setCantidad] = useState(1);


  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const sumarCantidad = () => {
    if (cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  };

  // Función para setear la cantidad seleccionada del Item si el stock es cero no funciona el botón //

  const agregarAlCarrito = () => {
    if (producto.stock === 0) {
      return;
    }else

    onCantidadChange(cantidad);
  };

  

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 mt-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                onClick={restarCantidad}
              >
                -
              </button>
            </div>
            <input
              type="text"
              className="form-control text-center"
              value={cantidad}
              readOnly
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                onClick={sumarCantidad}
              >
                +
              </button>
            </div>
          </div>
          <div className="agregar-carrito mt-3">
            <button
              className="btn btn-block btn-dark text-white rounded-pill"
              onClick={agregarAlCarrito}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
