import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
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

  const transitions = useTransition(isLoading, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="container">
      {transitions((style, itemLoading) => (
        itemLoading ? (
          <animated.div style={style}>
            <div className="loading-spinner">
              <div className="spinner-border mb-3" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="cargando">Cargando Detalles...</p>
            </div>
          </animated.div>
        ) : (
          <animated.div style={style}>
            {productoDetalle && <ItemDetail producto={productoDetalle} />}
          </animated.div>
        )
      ))}
    </div>
  );
};

  




