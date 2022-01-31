import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/ItemDetail";


const ProducDetailPage =()=>{
    const {productId} =useParams();
    const [producto, setProducto] = useState([]);
    const [isloading, setIsloading]= useState(false);
    

    useEffect(()=>{
        const URL=`http://localhost:3001/PRODUCTOS/${productId}`
        setIsloading(true);
        fetch(URL)
            .then((respuesta)=> respuesta.json())
            .then((json) => setProducto(json))
            .finally(()=> setIsloading(false));
    },[productId]);

    if(isloading || !producto) return <p>Cargando Detalle.....</p>;
    return (
        <div>
            <h1>Este es el detalle del producto num : {productId}</h1>
            <Detail key={producto.id} product={producto} />
        </div>
    );
    
};

export default ProducDetailPage