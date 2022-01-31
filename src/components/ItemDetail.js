import "../css/estilos.css";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";

const Detail =({product})=>{

    let navigate = useNavigate();
    const goToProductos=()=>{
        navigate("/productos");
    };
    return(
        <div>
        <div className="boxDetalle">
            <img className="fotProduct" src={product.imag} alt={product.nombre}/>
            <div>
            <p>Producto: {product.nombre}</p>
            <p>Descripción: {product.descripcion}</p>
            <p>Talla: {product.talla}</p>
            <p>Precio: {product.precio}</p>
            <p>Stock: {product.stock}</p>
            </div> 
        </div>
        <ItemCount count='0' initial='0'stock='10' />
        <button onClick={goToProductos}>Regresar a Productos</button>
        </div>
    );
}

export default Detail;

