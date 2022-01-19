import React from "react";
import "./estilos.css";

function ItemCount (){
    const [count, setCount]= React.useState(0);
    const stock =10;
    const contar = ()=>{
        count>=0? setCount(count+1): setCount(count);
        //setCount (count +1)
    };
    const descontar=()=>{
        count<=0? setCount(count): setCount(count-1);
        //setCount (count -1)
    };

    if(count>=0 && count<=stock){
        return( 
            <div className="boxContador">
                <p>Producto</p>
                <div>
                    <buttom onClick={descontar} className="botContar">-</buttom>
                    <a>{count}</a>
                    <buttom onClick={contar} className="botContar">+</buttom>
                </div>
                <buttom className="boxNavegador" >Agregar Producto</buttom>
            </div> 
            );
    } else {//alert("error de stock");
        count = count-1
}
}

export default ItemCount;