import { useContext } from "react";

import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalItemsCart } = useContext(CartContext);

  return (
    <div>
      <FaShoppingCart size={25} />{" "}
      <span>{totalItemsCart() != 0 && <span>({totalItemsCart()})</span>}</span>
    </div>
  );
};
