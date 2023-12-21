import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';




export const CartWidget = ({carrito}) => {
  return (

   
    <div><FaShoppingCart size={25}/> <span>({carrito})</span>
     </div>


  )
}

