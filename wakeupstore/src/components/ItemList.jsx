import React, { useState, useEffect } from 'react';
import { Item } from './Item';
import { ItemDetailContainer } from './ItemDetailContainer';
import productos from "/src/assets/data.json";
import { useSpring, animated } from 'react-spring';
import { useParams } from 'react-router-dom';

const BASE_URL = '/imagenes/Productos'; // Ruta base de las imágenes

export const ItemList = () => {
  const { category } = useParams(); //seleccionamos la categoria para en la url. 

  const [productosState, setProductosState] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const animatedProps = useSpring({ opacity: isLoading ? 0 : 1 });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setTimeout(() => {
        const productosCopy = [...productos];
        let selectedProducts = [];

        if (category) {
          selectedProducts = productosCopy.filter(producto => producto.categoria === category);
        } else {
          selectedProducts = productosCopy;
        }

        setProductosState(selectedProducts);
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, [category]);

  // Función para manejar cuando se hace click en "Ver Detalles" del producto. 

  const handleProductClick = (productId) => {
    const selected = productosState.find(producto => producto.id === productId);
    setSelectedProduct(selected);
    handleVerDetalle(productId);
  };

  // Función para manejar cuando se hace click en "Ver Detalles" del producto. 

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
