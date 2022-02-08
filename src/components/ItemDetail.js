import "../css/estilos.css";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import { useCart } from "../context/CartContext";

//<img className="fotProduct" src={require('../../public/imagenes/'+ product.imag)} alt={product.nombre}/>
const Detail =({product, key})=>{
    const [cont, setCont]= useState(1);
    const navigate = useNavigate();
    const { addItem}= useCart();
    const handLeClick=()=>{
        addItem(product, cont);
    }
    return(
        <div>       
        <div className="boxDetalle">
            <div key ={product.id}>
            
            </div>
       
            <div>
            <p>Producto: {product.nombre}</p>
            <p>Descripción: {product.descripcion}</p>
            <p>Talla: {product.talla}</p>
            <p>Precio: {product.precio}</p>
            <p>Stock: {product.stock}</p>
            </div> 
        </div>
        <div className="boxContador">  
        <ItemCount cont={cont} setCont={setCont} stock={product.stock} />
        <button onClick={handLeClick} >Agregar al carrito</button> <br/>
        </div> <br/><br/>
        <button onClick={()=> navigate("/productos")}> Regresar a Productos</button>
        </div>
    );
}
export default Detail;

