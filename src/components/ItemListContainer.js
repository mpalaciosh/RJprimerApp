import React from "react";
import "../css/estilos.css";
import { Outlet } from "react-router-dom";



class Categorias extends React.Component{
    render(){
        return (
            <div > 
                {this.props.mytext}
                
            </div>
        );
    }
}
function Lista(){
    return(
        <><h3>Categorias  </h3>
        <div className="lista">
            <Categorias mytext="Niños" />
            <Categorias mytext="Niñas" />
            <Categorias mytext="Accesorios" />
            <Categorias mytext="Materno" />

        </div></>
    );
}

export default Lista;



