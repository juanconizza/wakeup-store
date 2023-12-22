import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContadorProducto = () => {

  const [cantidad, setCantidad] = useState(1);

  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const sumarCantidad = () => {

    //ACÁ VA LA VALIDACION DE STOCK A FUTURO //

    setCantidad(cantidad + 1);
  };

  return (
    <div className="container"> 
      <div className="row justify-content-center">
        <div className="col-lg-12 mt-3"> 
          <div className="input-group">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" onClick={restarCantidad}>-</button>
            </div>
            <input type="text" className="form-control text-center" value={cantidad} readOnly />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" onClick={sumarCantidad}>+</button>
            </div>
          </div>
          <div className="agregar-carrito mt-3">
            <button className="btn btn-block btn-dark text-white rounded-pill">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};
