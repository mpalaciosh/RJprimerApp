import React from "react";
import "../css/estilos.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";



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
        <>
        <div className="lista">
        <Link to="/category/1"><Categorias mytext="Niños" /></Link>
        <Link to="/category/2"><Categorias mytext="Niñas" /></Link>
        <Link to="/category/3"><Categorias mytext="Accesorios" /></Link>
        <Link to="/category/4"><Categorias mytext="Materno" /></Link>
        </div></>
    );
}

export default Lista;




