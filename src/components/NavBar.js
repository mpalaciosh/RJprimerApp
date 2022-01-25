import "./estilos.css";
import Logokd from './CartWidget';
import CartIcon from './icons/CartIcon';


function NavBar(){
    return (
    <nav> <h1>C & E Kids Store</h1> 
            <div className="navegador">
                <Logokd/>
                <a className="boxNavegador" href="index.html">INICIO</a>
                <a className="boxNavegador" href="">NOSOTROS</a> 
                <a className="boxNavegador" href="">PRODUCTOS</a> 
                <CartIcon/>
            </div>
    </nav>
    );
}

export default NavBar;