
import "../css/estilos.css";

const ItemCount = ({stock, cont, setCont})=>{

    const incrementar = ()=>{
        if(cont < stock){
            setCont((prev) => prev+1)
        }
    };
    const descontar=()=>{
        if(cont > 1){
            setCont((prev)=> prev-1)
        }
    };

        return( 
            <div >
                <div className="boxBarrContar"> 
                    <button onClick={descontar} className="botContar">-</button>
                    <p className="parrafo">{cont}</p>
                    <button onClick={incrementar} className="botContar">+</button>
                </div>
            </div> 
            );

}

export default ItemCount