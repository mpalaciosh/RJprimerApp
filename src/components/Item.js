import "./estilos.css";


const Item =({product})=>{
    return(
        <div className="boxItem">
            <img className="fotProduct" src={product.imag} alt={product.nombre}/>
            <p>Producto:{product.nombre}</p>
            <p>Descripción:{product.descripcion}</p>
            <p>Precio:{product.precio}</p>
            <p>Stock:{product.stock}</p>
        </div>
    );
}

export default Item;