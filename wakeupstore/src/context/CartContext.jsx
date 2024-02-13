import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  
  const [carrito, setCarrito] = useState([]);

  // Cargar el carrito desde el localStorage al montar el componente
  useEffect(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // Función para agregar o actualizar la cantidad de un producto en el carrito
  const handleCantidadSeleccionada = (producto, cantidad) => {
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);

    if (productoEnCarrito) {
      // Actualizar la cantidad si el producto ya está en el carrito
      setCarrito((prevCarrito) =>
        prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      );
    } else {
      // Agregar el producto al carrito si no está en el carrito
      setCarrito((prevCarrito) => [...prevCarrito, { ...producto, cantidad }]);
    }
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  //Función para mostrar el total de items en el CartWidget
  const totalItemsCart = () => {
    const total = carrito.reduce((accum, item) => accum + item.cantidad, 0);
    return total;
  };

  // Función para calcular el total de la compra del carrito
  const calcularTotal = () => {
    return carrito.reduce((total, producto) => {
      return total + producto.cantidad * producto.precio;
    }, 0);
  };

  // Función para Eliminar el Item del Carrito
  const eliminarItemCarrito = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  // Guardar el carrito en el localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        handleCantidadSeleccionada,
        vaciarCarrito,
        totalItemsCart,
        calcularTotal,
        eliminarItemCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
