
import { useEffect, useState} from "react";
import "./estilos.css";
import Detail from "./ItemDetail";
import { getItem } from "./promesa";

const URL = "http://localhost:3001/PRODUCTOS";
function DetailProducto() {
  const [productos, setProductos] = useState([]);
  const[isLoading, setIsloading]=useState(false);
  const[error, setError] =useState(null);
  useEffect(() => {
    
    setIsloading(true);
    fetch(URL)
    .then((respuesta)=> respuesta.json())
    .then((json) => setProductos(json))
    .catch((err) => setError(err))
    .finally(()=>setIsloading(false));
  }, []);

  if(isLoading){
    return <p>Cargando productos.....</p>;
  }else if(error){
    return <p>Ha habido un error {error.message}</p>;
  }else 
  return(
    <div className="boxProductos">
        {productos.map((produ) => (
        <Detail key={produ.id} product={produ} />
      ))}
    </div>
  );
}
export default DetailProducto;