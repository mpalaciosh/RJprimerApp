import MostrarProducto from "../components/ItemList";
import "../css/estilos.css"
import Categorias from "../components/ItemListContainer";
const ProductosPage =()=>{
    return(
        
        <div className="body">
            <h1>Nuestros Productos</h1>
            <Categorias/> <br />
            <MostrarProducto/>
        </div>
    );
};


export default ProductosPage