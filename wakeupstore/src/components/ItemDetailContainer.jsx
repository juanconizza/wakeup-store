import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = ({ producto }) => {
    const [productoDetalle, setProductoDetalle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      if (producto) {
        setIsLoading(true);
        setTimeout(() => {
          setProductoDetalle(producto);
          setIsLoading(false);
        }, 2000);
      }
    }, [producto]);
  
    return (
      <div className="container">
        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner-border mb-3" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="cargando">Cargando Detalles...</p>
          </div>
        ) : (
          productoDetalle && <ItemDetail producto={productoDetalle} isLoading={isLoading} />
        )}
      </div>
    );
  };
  




