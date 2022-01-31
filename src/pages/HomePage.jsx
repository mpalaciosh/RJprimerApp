import { useNavigate } from "react-router-dom";
import Categorias from "../components/ItemListContainer";
import { Outlet } from "react-router-dom";

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
            <button onClick={goToProductos}>Ir a ver los Produtos</button>
            </div>
        </div>
    );
};

export default HomePage