import { useState } from "react";
import "../css/estilos.css";


const ItemCount = ({stock})=>{

    const [cont, setCont]= useState(1);
    
    const incrementar = ()=>{
        //cont<stock? setCont(cont+1): setCont(cont);
        if(cont < stock){
            setCont(prev => prev+1)
          }
    };
    const descontar=()=>{
        //cont<=1? setCont(cont): setCont(cont-1);
        if(cont > 1){
            setCont(prev => prev-1)
          }
    };

        return( 
            <div >
                <div>
                    <button onClick={descontar} className="botContar">-</button>
                    <a>{cont}</a>
                    <button onClick={incrementar} className="botContar">+</button>
                </div>
               
            </div> 
            );

}

export default ItemCount