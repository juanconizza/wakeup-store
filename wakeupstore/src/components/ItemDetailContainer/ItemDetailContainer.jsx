import React, { useState, useEffect } from "react";

import { useTransition, animated } from "react-spring";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const BASE_URL = "/imagenes/Productos";

export const ItemDetailContainer = () => {
  const [productoDetalle, setProductoDetalle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  //Traemos el producto seleccionado de Firebase
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        setIsLoading(true);
        const docRef = doc(db, "productos", productId);
        const resp = await getDoc(docRef);
        if (resp.exists()) {
          setProductoDetalle({ id: resp.id, ...resp.data() });
        } else {
          console.log("El producto no existe");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducto();
  }, [productId]);
  const transitions = useTransition(isLoading, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="container">
      {transitions((style, itemLoading) =>
        itemLoading ? (
          <animated.div style={style}>
            <div className="loading-spinner">
              <div className="spinner-border mb-3 mt-3" role="status">
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
      )}
    </div>
  );
};
