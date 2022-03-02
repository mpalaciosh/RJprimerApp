import { useNavigate } from "react-router-dom";
import Categorias from "../components/ItemListContainer";
import { Outlet } from "react-router-dom";
import portada from "../imagenes/portada1.png";


const HomePage =()=>{
    let navigate = useNavigate();
    const goToProductos=()=>{
        navigate("/productos");
    };
    
    return(
        <div className="body">
            <div className="cajaGigante">

            <Categorias/>
            <Outlet/>
            <button className="botonProductos" onClick={goToProductos}>Ir a ver los Productos</button>
            <div className="cajaPortada" ><img  className="imgPortada" src={portada} alt="portada" /> </div>    
            </div>
        </div>
    );
};


export default HomePage;


            

