import { createContext, useContext, useState} from "react";
export const CartContext = createContext({});
CartContext.displayName = "CartContext";


export const CartProvider=({children})=>{

    const [cart, setCart]= useState([]);
   
        const addItem=(item, cantidad)=>{  
            const tproducto= cantidad* item.precio;
          const newCart ={        
              ...item, cant:cantidad, totalProduct:tproducto,
          }
        const isInCart =(idItem)=>{
            return cart.some((prod)=> prod.id === idItem);
        };
        if(!isInCart(item.id)){
            
            setCart([...cart, newCart]);
        }else{
            const newCarts = cart.map((cartItem)=>{
                const sumTotal = cartItem.cant + cantidad;
                const toproducto= sumTotal* cartItem.precio;
                if(cartItem.id === item.id){
                    return{...cartItem, cant:sumTotal, totalProduct:toproducto};
                }else {
                    return cartItem;
                }
            });
            setCart(newCarts);
            console.log(cart)
        }
      }     


        const items=(cart)=>{
            let item=0;
            cart.forEach((p) => {
                item += p.cant;
        });
        return item;
    }
    
        const removeItem=(id)=>{
            setCart((prev)=> prev.filter((element)=> element.id !==id));
        };     
        const clearAll=()=>{
            setCart([]);
        };
        const totalPagar=(cart) =>{
            let total = 0;
            cart.forEach((p) => {
                total += p.totalProduct;
            });
            return total;
        }

        //Vaciar carrito
        const clearCart = () => {
            setCart([]);
            console.log("Carrito vaciado");
        };

    return <CartContext.Provider value={{cart, addItem, removeItem, clearAll, items,totalPagar, clearCart}}>
        {children}
    </CartContext.Provider>
}

export const useCart =()=> useContext(CartContext);

