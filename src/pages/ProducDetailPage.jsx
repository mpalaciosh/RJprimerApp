import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/ItemDetail";


const ProducDetailPage =()=>{
    const {productId} =useParams();
    const [producto, setProducto] = useState([]);
    const [isloading, setIsloading]= useState(false);
    const [error, setError]= useState(null);
    

    useEffect(()=>{
        const URL=`http://localhost:3001/PRODUCTOS/${productId}`;
        setIsloading(true);
        fetch(URL)
            .then((res)=> res.json())
            .then((json) => setProducto(json))
            .catch((err)=> setError(err))
            .finally(()=> setIsloading(false));
    },[]);

    if(isloading) {return <p>Cargando Detalle.....</p>;
    }else if(error){
    return <p>Ha habido un error {error.message}</p>;
  }else 
return (
        <div>
            <h1>Este es el detalle del producto num : {productId}</h1>
            <Detail key={producto.id} product={producto} />    
        </div>
        
    );   
};

export default ProducDetailPage