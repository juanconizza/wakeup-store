import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Carrousel } from "./components/Carrousel";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar carrito={15} />
        <div className="container-fluid text-center">
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/category/:category" element={<ItemListContainer greetings="Bienvenidos a la tienda WakeUp, remeras reales para gente despierta" />} />
            <Route exact path="/item/:productId" element={<ItemDetailContainer />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
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
