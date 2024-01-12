import { ItemCount } from "./ItemCount";
import { useState, useEffect } from "react";

const BASE_URL = "/imagenes/Productos"; // Ruta base de las imágenes para no generar errores.

export const ItemDetail = ({ producto }) => {
  // Estado para almacenar la cantidad seleccionada del ItemCount
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);

  // Función para manejar la cantidad seleccionada
  const handleCantidadSeleccionada = (cantidad) => {
    
    setCantidadSeleccionada(cantidad);
    console.log(cantidadSeleccionada);// muestra la cantidad seleccioanda
     
  };

  useEffect(() => {
    handleCantidadSeleccionada(cantidadSeleccionada);
  }, [cantidadSeleccionada]);

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
                  <ItemCount
                    producto={producto}
                    onCantidadChange={handleCantidadSeleccionada}
                  />
                  <p className="mt-4"> Stock Disponible: {producto.stock} </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="text-center mt-3 mb-3">
        <button className="btn btn-block btn-dark text-white rounded-pill">
          Volver
        </button>
      </div>
    </div>
  );
};
