import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Carrousel } from "./components/Carrousel";



function App() {
  return (
    
    <div className="container-fluid text-center">

        <NavBar carrito={15}/>

        <Carrousel/>
        
        <ItemListContainer greetings="Bienvenidos a la tienda WakeUp, remeras reales para gente despierta"/>
        
       

        
</div>
    
  );
}



export default App;
