import './App.css';
import { MiModulo1 } from './miModulo';
import NavBar from './components/NavBar';
import Lista from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import MostrarProducto from './components/ItemList';
import DetailProducto from './components/ItemDetailContainer';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Lista/>  
      <ItemCount count='0' initial='0'stock='10' />
     
     <header className="App-header">
        <p>
          Bienvenido a la App de Maria Palacios
          <MostrarProducto/>
          <br></br>
          <DetailProducto/>
        </p>
      
      </header>
      <MiModulo1/>  
    </div>
  );
}

export default App;
