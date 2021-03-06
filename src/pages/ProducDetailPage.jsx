import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/ItemDetail";
import { getFirestore } from "../firebase";


const ProducDetailPage =()=>{
    const {productId} =useParams();
    const [producto, setProducto] = useState([]);
    const [isloading, setIsloading]= useState(false);
    const [error, setError]= useState(null);
    

    useEffect(()=>{
        const db=getFirestore();
        const productCollection = db.collection("PRODUCTOS");
        const selecProduct = productCollection.doc(productId)

        setIsloading(true)
        selecProduct
        .get()
        .then((response)=>{
            if(!response.exists) console.log("El producto no existe");
            setProducto({...response.data(), id: response.id});
        })
        .catch((err)=>setError(err))
        .finally(()=> setIsloading(false));
    },[productId]);

    if(isloading) {return <p>Cargando Detalle.....</p>;
    }else if(error){
    return <p>Ha habido un error {error.message}</p>;
    }else 
return (
        <div>
            <br />
            <Detail key={producto.id} product={producto} />    
        </div>
        
    );   
};

export default ProducDetailPage