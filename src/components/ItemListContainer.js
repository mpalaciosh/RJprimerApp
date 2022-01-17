import React from "react";
import react from "react";
import './estilos.css';



class Categorias extends React.Component{
    render(){
        return (
            <div className="lista"> 
                {this.props.mytext}
            </div>
        );
    }
}
function Lista(){
    return(
        <div >Categorias : 
        <Categorias mytext="Niños"/> 
        <Categorias mytext="Niñas"/> 
        <Categorias mytext="Accesorios"/>
        <Categorias mytext="Materno"/>

        </div>
    );
}

export default Lista;



