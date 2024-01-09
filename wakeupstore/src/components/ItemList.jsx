import React, { useState, useEffect } from 'react';
import { Item } from './Item';
import { ItemDetailContainer } from './ItemDetailContainer';
import productos from "/src/assets/data.json";
import { useSpring, animated } from 'react-spring';

const BASE_URL = '/imagenes/Productos'; // Ruta base de las imágenes

export const ItemList = ({ selectedCategory, handleVerDetalle }) => {
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
      }, 2000);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('Selected Category:', selectedCategory); // Agregar este log
    if (selectedCategory) {
      const filteredProducts = productos.filter(producto => producto.categoria === selectedCategory);
      setProductosState(filteredProducts);
    } else {
      setProductosState(productos);
    }
  }, [selectedCategory]);

  const handleProductClick = (productId) => {
    const selected = productosState.find(producto => producto.id === productId);
    setSelectedProduct(selected);
    handleVerDetalle(productId);
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
                <Item
                  producto={{
                    ...producto,
                    imagen: `${BASE_URL}/${producto.imagen}` // Utiliza la ruta base
                  }}
                  handleVerDetalle={handleProductClick}
                />
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
