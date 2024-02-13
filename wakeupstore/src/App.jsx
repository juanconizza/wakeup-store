import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Carrousel } from "./components/Carrousel/Carrousel";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { LoginContextProvider } from "./context/LoginContext";
import { CartContextProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import { LoginAuth } from "./components/Login/LoginAuth";
import { Register } from "./components/Login/Register";
import { UserPanel } from "./components/UserPanel/UserPanel";
import { Contacto } from "./components/Contacto/Contacto";


function App() {


  return (
    <div>
      <CartContextProvider >
      <BrowserRouter>
      <LoginContextProvider>
        <NavBar  />
        <div className="container-fluid text-center">
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/category/:category" element={<ItemListContainer greetings="Bienvenidos a la tienda WakeUp, remeras reales para gente despierta" />} />
            <Route exact path="/item/:productId" element={<ItemDetailContainer />} />
            <Route exact path="/carrito" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/login" element={<LoginAuth />} />
            <Route exact path="/registro" element={<Register />} />
            <Route exact path="/panel" element={<UserPanel />} />
            <Route exact path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </LoginContextProvider>
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
