import { useState } from "react";
import "../css/estilos.css";

function ItemCount (){
    const [cont, setCont]= useState(0);
    const stock =10;

    const contar = ()=>{
        cont>=0? setCont(cont+1): setCont(cont);
    };
    const descontar=()=>{
        cont<=0? setCont(cont): setCont(cont-1);
    };

    if(cont>=0 && cont<=stock){
        return( 
            <div className="boxContador">
                <div>
                    <button onClick={descontar} className="botContar">-</button>
                    <a>{cont}</a>
                    <button onClick={contar} className="botContar">+</button>
                </div>
                <button  >Agregar Producto</button>
            </div> 
            );
    } else {//alert("error de stock");
        cont = cont-1
}
}

export default ItemCount;