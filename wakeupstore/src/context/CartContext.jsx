import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);

  console.log(carrito);

  // Función para agregar o actualizar la cantidad de un producto en el carrito
  const handleCantidadSeleccionada = (producto, cantidad) => {
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);

    if (productoEnCarrito) {
      // Actualizar la cantidad si el producto ya está en el carrito
      setCarrito((prevCarrito) =>
        prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
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
  }

  return (
    <CartContext.Provider value={{ carrito, setCarrito, handleCantidadSeleccionada, vaciarCarrito, totalItemsCart }}>
      {children}
    </CartContext.Provider>
  );
};
