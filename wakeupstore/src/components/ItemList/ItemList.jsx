import React, { useState, useEffect } from "react";
import { Item } from "../Item/Item";
import { useSpring, animated } from "react-spring";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase/config";

const BASE_URL = "/imagenes/Productos";

export const ItemList = () => {
  const { category } = useParams();

  const [productosState, setProductosState] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  const animatedProps = useSpring({ opacity: isLoading ? 0 : 1 });

  // Llamado a la base de datos de Firebase //

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const productosCopy = collection(db, "productos");

        // Utilizamos query y where para filtrar por categoría si está presente y solo traer de la base lo seleccionado.

        const q = category
          ? query(productosCopy, where("categoria", "==", category))
          : productosCopy;

        const resp = await getDocs(q);

        const selectedProducts = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductosState(selectedProducts);

      } catch (error) {
        console.error("Error al recuperar datos de Firebase", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchData();
  }, [category]);

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
        {!isLoading && (
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
      </div>
    </div>
  );
};
