import "./estilos.css";
import detailProducto from "./ItemDetail";


const Item =({product})=>{
    return(
        <div className="boxItem">
            <img className="fotProduct" src={product.imag} alt={product.nombre}/>
            <p>Producto: {product.nombre}</p>
            <p>Precio: {product.precio}</p>
            <button onClick={detailProducto}>Descripción</button> 
        </div>
    );
}

export default Item;