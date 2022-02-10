import { createContext, useContext, useState} from "react";
export const CartContext = createContext({});
CartContext.displayName = "CartContext";


export const CartProvider=({children})=>{

    const [cart, setCart]= useState([]);
        const addItem=(item, cantidad)=>{

           /*cart.forEach((p)=>{
              if( p.item.id==item.id && item<=0){
                alert("Producto ya agregado");
                
                }else{  */
                    const totalProduct=(item.precio * cantidad); 
                const newItem={item, cantidad, totalProduct};
                 
                 console.log('se agrego al carrito:', newItem)
                     setCart((prevState)=>[...prevState, newItem]);
                 //}
              //} )       
        };
        const items=cart.length;
        const removeItem=(id)=>{
            setCart((prev)=> prev.filter((element)=> element.item.id !==id));
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
    return <CartContext.Provider value={{cart, addItem, removeItem, clearAll, items,totalPagar}}>
        {children}
    </CartContext.Provider>
}

export const useCart =()=> useContext(CartContext);