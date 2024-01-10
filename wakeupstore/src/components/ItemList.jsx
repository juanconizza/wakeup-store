import React, { useState, useEffect } from "react";
import { Item } from "./Item";
import { ItemDetailContainer } from "./ItemDetailContainer";
import productos from "/src/assets/data.json";
import { useSpring, animated } from "react-spring";
import { useParams } from "react-router-dom";

const BASE_URL = "/imagenes/Productos"; // Ruta base de las imágenes para no generar errores.

export const ItemList = () => {
  const { category } = useParams(); //seleccionamos la categoria para en la url.

  const [productosState, setProductosState] = useState([]); // variable de estado para mostrar los productos del home
  const [selectedProduct, setSelectedProduct] = useState(null); // variable de estado para la seleción del producto por categorias
  const [isLoading, setIsLoading] = useState(true); //variable de estado para el condicional de la animación simulada de cargando.

  const animatedProps = useSpring({ opacity: isLoading ? 0 : 1 }); //Animación de carga las cards.

  // Estado de uso al momento de la carga y para mostrar los productos de la categoria selccionada //

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setTimeout(() => {
        const productosCopy = [...productos];
        let selectedProducts = [];

        if (category) {
          selectedProducts = productosCopy.filter(
            (producto) => producto.categoria === category
          );
        } else {
          selectedProducts = productosCopy;
        }

        setProductosState(selectedProducts);
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, [category]);

  // Estado de uso al momento de la carga y para mostrar los productos de la categoria selccionada //

  return (
    <div className="text-center">
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ minHeight: "25vh" }}
      >
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
                    imagen: `${BASE_URL}/${producto.imagen}`,
                  }}
                />
              </div>
            ))}
          </animated.div>
        )}
        {selectedProduct && <ItemDetailContainer producto={selectedProduct} />}
      </div>
    </div>
  );
};
