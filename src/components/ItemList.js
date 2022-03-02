import { useEffect, useState} from "react";
import "../css/estilos.css";
import { getFirestore } from "../firebase";
import Item from "./Item.js";

function MostrarProducto() {
  const [productos, setProductos] = useState([]);
  const[isLoading, setIsloading]=useState(false);
  const[error, setError] =useState(null);
  useEffect(() => {
    const db=getFirestore();
    const productCollection = db.collection("PRODUCTOS");
    
    const  getDatafromFirestore = async ()=>{
      setIsloading (true);
      try{
          const response = await productCollection.get();
          if (response.empty)   console.log ("No hay productos");  
          setProductos(response.docs.map((doc)=> ({...doc.data(), id: doc.id})));
    } catch (err){
      setError(err);
    }finally{
      setIsloading(false);
    }
    };
    getDatafromFirestore();
  
  }, []);

  if(isLoading){
    return <p>Cargando productos.....</p>;
  }else if(error){
    return <p>Ha habido un error {error.message}</p>;
  }else 
  return(
    <div className="boxProductos">
        {productos.map((produ) => (
        <Item key={produ.id} producto={produ} />
      ))}
    </div>
  );
}
export default MostrarProducto;
