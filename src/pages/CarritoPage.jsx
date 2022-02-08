import { useCart } from "../context/CartContext";
import * as React from "react";

const totalPagar=0
const CarritoPage=()=>{
    const {cart, removeItem, clearAll, items}=useCart();
    
    return(
        <div>
            <h1>Carrito Page</h1>
            <h2>Cantidad de articulos en el carrito: {items} </h2>
            
            {cart.map((compra)=>{
                const totalProduct=(compra.item.precio * compra.cantidad);
                 //totalPagar((prev)=>prev+totalProduct);
               
                return(
                <><div key={compra.item.id} className="boxCarrito">
                        <img className="imagCarrito" src={require('../../public/imagenes/' + compra.item.imag)} />
                        <p>{compra.item.nombre}</p>
                        <p>{compra.cantidad}</p>
                        <p>S/.{totalProduct}</p>
                        <button onClick={() => removeItem(compra.item.id)}>Quitar producto</button>
                    </div>
                  </>
                
            )})}
              <div>
                    <p>Total a pagar S/.{totalPagar}</p>
                    </div>
            <br/><br/><button onClick={clearAll}>Borrar todo</button>
        </div>
    );

};

export default CarritoPage;