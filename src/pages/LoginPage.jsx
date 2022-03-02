import { useState } from "react"
import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getFirestore } from "../firebase";


const LoginPage=()=>{
    const numeros=["0", "1", "2", "3", "4", "5","6","7","8","9","/","-","+"];
    const letras=["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","/","-","+","*"];
    const validTelef=(event)=>{
        if(letras.includes(event.key))
        { event.preventDefault();}
    };
    const handLeKeyDown=(event)=>{
        if(numeros.includes(event.key))
        { event.preventDefault();}
    };

    let {cart, totalPagar, clearCart}=useCart();  
    const [name, setName]= useState('');
    const [telef, setTelef]= useState("");
    const [direc, setDirec]= useState("");

    let navigate = useNavigate();
    const handLeSubmit =(evt)=>{
        evt.preventDefault()
        
        if(!name|| !telef){
            alert('Por favor complete el formulario')
            return false;
        }

            const newOrder = {
                buyer:{name, telef, direc}, 
                items: {cart}, 
                total:totalPagar(cart),
            };

            console.log(newOrder);
            const db = getFirestore()
            db.collection('orders').add(newOrder)
            .then((res)=>{console.log("compra realizada", res.id)
                navigate(`/detaCompra/${res.id}`);
                clearCart();
            })
            .catch((err)=>console.log('Hubo un error', err));          
    };

                
return (
    <div className="padreCarrito">
        <h1>Registrate </h1>
    
    <Outlet/>
    <div className="formulario">
    <h2>Introdusca sus datos:</h2>
    <form onSubmit={handLeSubmit}>
        <label htmlFor="name">Nombre:  </label>
        <input type="text" id= "name" placeholder="escriba su nombre" 
        onKeyDown={handLeKeyDown} value={name} onChange={e=>setName(e.target.value)}/> <br/> 
        <label htmlFor="telefono">Teléfono:  </label>
        <input type="text" id= "telefono" placeholder="ingrese su telefono"
        onKeyDown={validTelef} maxLength="9" value={telef}  onChange={e=>setTelef(e.target.value)}/> <br/> 
        <label htmlFor="direccion">Dirección:  </label>
        <input type="text" id= "direccion" placeholder="ingrese su direccion"
        value={direc} onChange={e=>setDirec(e.target.value)}/> <br/> 
        <br/><input className="botonCarrito" type="submit" value="Finalizar Compra"/>  
    </form>
    </div>
</div> 
)}
export default LoginPage;
