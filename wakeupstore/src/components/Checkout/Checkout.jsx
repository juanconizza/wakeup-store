import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import gracias from "/imagenes/gracias.webp"
import FormularioCheckout from "./FormularioCheckout";

export const Checkout = () => {

const { vaciarCarrito, carrito, calcularTotal } = useContext(CartContext);

const [pedidoId, setpedidoId] = useState("")
const [nombreCliente, setnombreCliente] = useState("")

  //Llamamos a useForms

  const {
    handleSubmit,
    register,
    control,
    formState,
    watch,
  } = useForm();


  // Verificamos que los email coincidan con la función watch
  const emailValue = watch("email");
  

  // Manejamos la data del submit y le sumamos los productos y el total del carrito.
  const onSubmit = (data) => {
    const pedido = {
      fechaDeCompra: serverTimestamp(),
      cliente: data,
      productos: carrito,
      total: calcularTotal(),
    };

    const pedidoRef = collection(db, "pedidos")
    addDoc(pedidoRef, pedido)
        .then ((doc) => {
            setpedidoId(doc.id)
            setnombreCliente(data.firstName)
        })

    //vaciamos el carrito luego del pedido. 
    vaciarCarrito();

  };

  //Early Return al momento de la finalización del pedido//

  if (pedidoId) {
    return (
        <div className="container vh-100 mt-5">
            <img className="graciasManito mb-4" src={gracias} alt="gracias por la compra" />
            <h2>¡Gracias por Tu Compra {nombreCliente}!</h2>
            <h4 className="mt-2">Tu Número de pedido es: {pedidoId}</h4>
        </div>
    )
    
  }

  return (
    <div>

      <FormularioCheckout onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} control={control} errors={formState.errors} watch={watch} emailValue={emailValue} />

    </div>
  );
};
