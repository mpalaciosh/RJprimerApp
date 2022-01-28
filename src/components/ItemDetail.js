import "./estilos.css";

const Detail =({product})=>{
    return(
        <div className="boxDetalle">
            <img className="fotProduct" src={product.imag} alt={product.nombre}/>
            <p>Producto: {product.nombre}</p>
            <p>Descripción: {product.descripcion}</p>
            <p>Talla: {product.talla}</p>
            <p>Precio: {product.precio}</p>
            <p>Stock: {product.stock}</p>
            <button>Regresar</button> 
        </div>
    );
}

export default Detail;

