import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useCart } from "../../context/CartContext";

const CartIcon = ()=>{
    const {items}=useCart();
    let navigate = useNavigate();
    const goToCarrito=()=>{
        navigate("/carrito");
    };
    return(
            <div>
            <HiShoppingCart className ='carticon' onClick={goToCarrito}/> 
            <div className='cantItems'>
                <p>{items}</p>
            </div>
            </div>       
    )

}

export default CartIcon;

