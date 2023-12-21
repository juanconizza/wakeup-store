import React from 'react';

export const ItemDetail = ({ producto }) => {

  
  return (
    <div className="card">
      <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
      <div className="card-body">
        <h5 className="card-title tituloscard">{producto.titulo}</h5>
        <p className="card-text preciocard">Precio ${producto.precio}</p>
        </div>
    </div>
  );
};

