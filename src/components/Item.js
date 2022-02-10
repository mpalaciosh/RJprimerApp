import { useNavigate } from "react-router-dom";
import "../css/estilos.css";


//<img className="fotProduct" src={require(`../../public/imagenes/${producto.imag}`)} alt={producto.nombre}/>
const Item =({producto})=>{
    const navigate = useNavigate();
    return(
        <div className="boxItem">
            <img className="fotProduct" src={producto.imag} alt={producto.nombre}/>
            <p>Producto: {producto.nombre}</p>
            <p>Precio: {producto.precio}</p>
            <button onClick={()=> navigate(`/productos/${producto.id}`)}>Ver mas......</button> 
        </div>
    );
}

export default Item;