import { ContadorProducto } from './ContadorProducto';

const BASE_URL = '/imagenes/Productos'; // Ruta base de las imágenes para no generar errores.


export const ItemDetail = ({ producto }) => {
    
  
    return (
      <div className="container-md">
        <div className="card">
          <div className="row g-0">
            {producto && (
              <>
                <div className="col-md-4">
                  <img src={`${BASE_URL}/${producto.imagen}`} className="card-img-top" alt={producto.titulo} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title tituloscard">{producto.titulo}</h5>
                    <p className="card-text descripcioncard">{producto.descripcion}</p>
                    <p className="card-text">
                      <span className="preciocard">Precio ${producto.precio}</span>
                    </p>
                    <p className='mb-0'>Cantidad:</p>
                    <ContadorProducto />
                  </div>
                </div>
              </>
            )}

            
          </div>
        
        </div>
  
        <div className="text-center mt-3 mb-3">
          <button className="btn btn-block btn-dark text-white rounded-pill">Volver</button>
        </div>
      </div>
    );
  };
  