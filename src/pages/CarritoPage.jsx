import { useCart } from "../context/CartContext";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import "../css/estilos.css";

const CarritoPage=()=>{
    const {cart, removeItem, clearAll, items, totalPagar}=useCart();  
    let navigate = useNavigate();
    const goToProductos=()=>{
        navigate("/productos");
    };
    if(items<=0){
        return( 
        <>
        <div className="cajaGigante">
            <p>Carrito de Compras</p>
            <p> Aun no has escogido productos para comprar </p>
            <button className="botonCarrito" onClick={goToProductos}>Ir a ver los Produtos</button><br />
            </div>
            </>
        )
    }else
    return(
        <div className="cajaFinal">
        <div className="padreCarrito"> 
                        <h1>Carrito de Compras</h1><br />
                        
                        {cart.map((compra)=>{      
                            return(
                            <div key={compra.id} className="boxCarrito">
                                        
                                        <img className="imagCarrito" src={compra?.imag} alt={compra.nombre}/>
                                        <p>{compra.nombre}</p>
                                        <p>{compra.cant}</p>
                                        <p>S/.{compra.totalProduct}</p>
                                        <button onClick={() => removeItem(compra.id)}>Quitar producto</button>              
                            </div>
                            )
                        })}
                            <div> <p>Total a pagar S/.{totalPagar(cart)}</p> 
                            <button onClick={clearAll}>Borrar todo</button>
                            </div>
        </div>

            <LoginPage/>
            
            
        </div>
    )}
export default CarritoPage;

