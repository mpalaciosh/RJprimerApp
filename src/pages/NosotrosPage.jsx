import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


const NosotrosPage =()=>{
    return(
        <div className="body">
            <div className="cajaGigante">
            <h1>NosotrosPage</h1>
            <Link className="found" to="/nosotros/vision">Vision</Link> <br />
            
            <Link className="found" to="/nosotros/mision">Mision</Link> <br />
            <Link className="found" to="/nosotros/login">Ingresar</Link>
            <Outlet/>
            
            
            </div>
        </div>
    );
};

export default NosotrosPage