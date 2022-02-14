import { useEffect, useState} from "react";
import "../css/estilos.css"
import { getFirestore } from "../firebase";
import Item from "../components/Item.js";
import { useParams } from "react-router-dom";
import Categorias from "../components/ItemListContainer";
import { Outlet } from "react-router-dom";

const CategoriasPage =()=>{
    const {categoriaId} =useParams();
    const [productos, setProductos] = useState([]);
    const[isLoading, setIsloading]=useState(false);
    const[error, setError] =useState(null);

    useEffect(() => {
      const db=getFirestore();

      let productCollection;
      if (categoriaId){
        productCollection = db.collection("PRODUCTOS").where('catId', '==', Number(categoriaId))
      } else {
        productCollection = db.collection("PRODUCTOS")
      }
     

      
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
    }, [categoriaId]);
  
    if(isLoading){
      return <p>Cargando productos.....</p>;
    }else if(error){
      return <p>Ha habido un error {error.message}</p>;
    }else 

    return(
        <div className="body">
            <Categorias/>
            <Outlet/>
             <h1>Categoria {categoriaId} </h1> <br /> <br />
             <div className="boxProductos">
            {productos.map((produ) => (
            <Item key={produ.id} producto={produ} />
          ))}
        </div>
        </div>
      );
    };

export default CategoriasPage

