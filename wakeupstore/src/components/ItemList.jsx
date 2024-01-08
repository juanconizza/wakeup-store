import React, { useState, useEffect } from 'react';
import { Item } from './Item';
import { ItemDetailContainer } from './ItemDetailContainer';

import productos from "/src/assets/data.json";
import { useSpring, animated } from 'react-spring';

export const ItemList = () => {
  const [productosState, setProductosState] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const animatedProps = useSpring({ opacity: isLoading ? 0 : 1 });

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        const productosCopy = [...productos];
        const selectedProducts = [];

        while (productosCopy.length > 0) {
          const randomIndex = Math.floor(Math.random() * productosCopy.length);
          selectedProducts.push(productosCopy.splice(randomIndex, 1)[0]);
        }

        setProductosState(selectedProducts);
        setIsLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  const handleProductClick = (productId) => {
    const selected = productosState.find(producto => producto.id === productId);
    setSelectedProduct(selected);
  };

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '25vh' }}>
        {isLoading && (
          <div className="loading-spinner">
            <div className="spinner-border mb-3" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="cargando">Cargando...</p>
          </div>
        )}
        {!isLoading && !selectedProduct && (
          <animated.div style={animatedProps} className="row">
            {productosState.map((producto) => (
              <div key={producto.id} className="col-md-3 mb-3">
                <Item producto={producto} handleVerDetalle={handleProductClick} />
              </div>
            ))}
          </animated.div>
        )}
        {selectedProduct && (
          <ItemDetailContainer producto={selectedProduct} />
        )}
      </div>
    </div>
  );
};
