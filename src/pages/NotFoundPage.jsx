import { Link } from "react-router-dom";
import "../css/estilos.css"

const NotFoundPage=()=>{
    return(
        <div >
            <h1>Error 404</h1>
                <p>No se encuentra la página </p>
                <Link className="found" to="/">Volver al Home</Link>
        </div>
    );
};

export default NotFoundPage;