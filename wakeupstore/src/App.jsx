import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Carrousel } from "./components/Carrousel/Carrousel";


function App() {
  return (
    
    <div className="container-fluid">

        <NavBar carrito={15}/>

        <Carrousel/>
        
        <ItemListContainer greetings="Probando Props"/>

        
</div>
    
  );
}



export default App;
