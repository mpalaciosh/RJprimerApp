import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import "../css/estilos.css";




const DetalleCompra =()=>{
    const {orderId}= useParams();
    const [order, setOrder]=useState({});

    useEffect(()=>{
        const db= getFirestore();
        const ordenCollection=db.collection("orders");
        const selectOrden = ordenCollection.doc(orderId)
        selectOrden.get()
        .then((res)=> setOrder({...res.data(),id: res.id }));
        
    },[orderId]);

    return(
        
        <div className="comprar">
            
            <h1>Gracias por su Compra</h1>
            <p>Cliente: {order?.buyer?.name} </p> <br/>
            <p>Detalle de Compra</p> 

           {console.log(order)}

           {order?.items?.cart?.map((ord)=>{      
               return(
                    <div className="boxCarrito2">
                   <img className="imagCarrito" src={ord.imag} alt={ord.nombre}/>
                   <p>{ord.nombre}</p>
                   <p>{ord.cant}</p>
                   <p>S/.{ord.totalProduct}</p> 
                   </div> 
                    )
           })}
            
            <p>Total a Pagar: S/ {order?.total} soles</p>
            <p>Telefono: {order?.buyer?.telef}</p>
            <p>Dirección: {order?.buyer?.direc}</p>   
                            
                                            
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
                            <p>Dirección: {order.buyer.direc}</p>   
                            
                            
                            



                             
                            
                            */


                            