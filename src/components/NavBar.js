import "../css/estilos.css";
import { Link } from "react-router-dom";
import Logokd from './CartWidget';
import CartIcon from '../imagenes/icons/CartIcon';
import { useNavigate } from "react-router-dom";

function NavBar(){

    let navigate = useNavigate();
    const goToHome=()=>{
        navigate("/");
    };
    return (
    <nav> <h1 onClick={goToHome}>C & E Kids Store</h1> 
            <div className="navegador">
                <Logokd/>
                <a className="boxNavegador">
                    <Link to="/">INICIO</Link>
                </a>
                <a className="boxNavegador">
                    <Link to="/nosotros">NOSOTROS</Link>
                </a> 
                <a className="boxNavegador">
                    <Link to="/productos">PRODUCTOS</Link>
                </a>

                <CartIcon/>
            </div>
    </nav>
    );
}

export default NavBar;