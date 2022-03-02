import "../css/estilos.css";
import { Link } from "react-router-dom";
import Logokd from './CartWidget';
import CartIcon from './CartIcon';
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
                
                <Link  className="boxNavegador" to="/">INICIO</Link>
                <Link className="boxNavegador" to="/productos">PRODUCTOS</Link>
                <Link className="boxNavegador" to="/nosotros">NOSOTROS</Link>
                <CartIcon/>
            </div>
    </nav>
    );
}

export default NavBar;