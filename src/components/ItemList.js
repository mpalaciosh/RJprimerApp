import { useEffect, useState} from "react";
import { getProductos } from "./baseDatos";
import "./estilos.css";
import Item from "./Item.js";


function MostrarProducto() {
  const [productos, setProductos] = useState([]);
  const[isLoading, setIsloading]=useState(false);
  useEffect(() => {
      setIsloading(true)
    getProductos()
    .then((data) => setProductos(data))
    .catch((error) => console.error(error))
    .finally(()=>setIsloading(false));
  }, []);

  
  return(
    <div>
        {isLoading? (
        <p>Cargando.....</p>
        ): (
      productos.map((produ) => (
        <Item key={produ.id} product={produ} />
      )))};
    </div>
  );
}
export default MostrarProducto;
