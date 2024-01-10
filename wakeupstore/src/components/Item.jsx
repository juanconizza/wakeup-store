import React from 'react';

export const Item = ({ producto, handleProductClick }) => {
  return (
    <div className="card">
      <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
      <div className="card-body">
        <h5 className="card-title tituloscard">{producto.titulo}</h5>
        <p className="card-text">Precio ${producto.precio}</p>
        <button className='btn btn-block btn-dark text-white rounded-pill' onClick={() => handleProductClick(producto.id)}>Ver Detalle</button>
      </div>
    </div>
  );
};

