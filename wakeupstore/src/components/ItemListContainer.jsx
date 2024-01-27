import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greetings }) => {


  
  return (
    <div className="container-fluid mt-3">
      <h1 className="text-center tituloh1">{greetings}</h1>
      <ItemList />
    </div>
  );
};
