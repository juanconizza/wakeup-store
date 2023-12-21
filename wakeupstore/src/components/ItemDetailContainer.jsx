import '/src/App.css';
import { ContadorProducto } from "./ContadorProducto";
import { ItemDetail } from "./ItemDetail";
import productos from "/src/assets/data.json";
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';



export const ItemDetailContainer = () => {
    const [productosState, setProductosState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
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

    const animatedProps = useSpring({opacity: isLoading ? 0 : 1});
        
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
        {!isLoading && (
          <animated.div style={animatedProps} className="row">
            {productosState.map((producto) => (
              <div key={producto.id} className="col-md-3 mb-3">
                <ItemDetail producto={producto} />
                <ContadorProducto />
              </div>
            ))}
          </animated.div>
        )}
      </div>
    </div>         
  );
};
