import * as React from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";



const DetalleCompra =()=>{
    const {orderId}= useParams();
    const [order, setOrder]=React.useState({});

    React.useEffect(()=>{
        const db= getFirestore();
        db.collection("orders")
        .doc(orderId)
        .get()
        .then((res)=> setOrder({id: res.id, ...res.data()}));
    },[orderId]);

    return(
        <div>
            <h1>Gracias por su Compra, sr/sra. {order.buyer.name}</h1>
            <p>Detalle de Compra</p>
                                          
        </div>
    );
};

export default DetalleCompra;

/*{order.items.map((ord)=>{      
                            return(
                                
                            <div key={ord.id} className="boxCarrito">
                                        
                                        <img className="imagCarrito" src={ord.items?.imag} alt={ord.items.nombre}/>
                                        <p>{ord.nombre}</p>
                                        <p>{ord.cant}</p>
                                        <p>S/.{ord.totalProduct}</p>   
                            </div>
                            )
                        })}
                        
                        
                        
                            <p>Total a Pagar: {order.total}</p>
                            <p>Telefono: {order.buyer.telef}</p>
                            <p>Dirección: {order.buyer.direc}</p>     */