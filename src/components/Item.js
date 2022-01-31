import { useNavigate } from "react-router-dom";
import "../css/estilos.css";
import detailProducto from "./ItemDetail";


const Item =({product})=>{
    const navigate = useNavigate();
    return(
        <div className="boxItem">
            <img className="fotProduct" src={product.imag} alt={product.nombre}/>
            <p>Producto: {product.nombre}</p>
            <p>Precio: {product.precio}</p>
            <button onClick={()=> navigate(`/productos/${product.id}`)}>Ver mas......</button> 
        </div>
    );
}

export default Item;