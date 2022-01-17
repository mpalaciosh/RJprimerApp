import "./estilos.css";
import Logokd from './CartWidget';



function NavBar(){
    return (
    <nav> <h1>C & E Kids Store</h1> 
    <div>
            <navBar className="navegador">
                <Logokd/>
                <div className="boxNavegador"> <a href="index.html">INICIO</a> </div>
                <div className="boxNavegador"> <a href="">NOSOTROS</a> </div>
                <div className="boxNavegador"> <a href="">PRODUCTOS</a> </div>
            </navBar>
    </div>
    </nav>
    );
}

export default NavBar;