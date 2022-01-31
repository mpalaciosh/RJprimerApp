import React from "react";
import "../css/estilos.css";
import logok from '../imagenes/logokids.png';
import { useNavigate } from "react-router-dom";

function Logokd(){

        let navigate = useNavigate();
        const goToHome=()=>{
            navigate("/");
        };
    
    return (
            <img src={logok} className="logok" onClick={goToHome} />  
            
    )
    }

export default Logokd;