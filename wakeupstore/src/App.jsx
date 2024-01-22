import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Carrousel } from "./components/Carrousel";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import { Cart } from "./components/Cart";



function App() {


  return (
    <div>
      <CartContextProvider >
      <BrowserRouter>
        <NavBar  />
        <div className="container-fluid text-center">
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/category/:category" element={<ItemListContainer greetings="Bienvenidos a la tienda WakeUp, remeras reales para gente despierta" />} />
            <Route exact path="/item/:productId" element={<ItemDetailContainer />} />
            <Route exact path="/carrito" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

function Inicio() {
  return (
    <>
      <Outlet />
      <Carrousel />
      <ItemListContainer greetings="Bienvenidos a la tienda WakeUp, remeras reales para gente despierta" />
    </>
  );
}

export default App;
