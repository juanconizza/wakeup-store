import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Carrousel } from "./components/Carrousel";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar carrito={15} />
      <div className="container-fluid text-center">
        <Carrousel />

        <ItemListContainer greetings="Bienvenidos a la tienda WakeUp, remeras reales para gente despierta" />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
