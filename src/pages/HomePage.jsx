import { useNavigate } from "react-router-dom";
import Categorias from "../components/ItemListContainer";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";



const HomePage =()=>{
    let navigate = useNavigate();
    const goToProductos=()=>{
        navigate("/productos");
    };
    

    return(
        <div className="body">
            <div className="cajaGigante">
            <h1>HomePage</h1>
            <Categorias/>
            <Outlet/>
            <button className="botonCarrito" onClick={goToProductos}>Ir a ver los Produtos</button> <br />
            <Link className="found" to="/login">Ingresar</Link>
            <Outlet/>
            </div>
        </div>
    );
};


export default HomePage


