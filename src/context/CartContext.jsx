import { createContext, useContext, useState} from "react";
export const CartContext = createContext({});
CartContext.displayName = "CartContext";


export const CartProvider=({children})=>{

    const [cart, setCart]= useState([]);
        const addItem=(item, cantidad)=>{

           // if(item.id==cart.map((item)).id){
            const newItem={item, cantidad};
            console.log('se agrego al carrito:', newItem)
            setCart((prevState)=>[...prevState, newItem]);
      //  }else{
            //alert("Producto ya agregado");}
        };
        const items=cart.length;
        const removeItem=(id)=>{
            setCart((prev)=> prev.filter((element)=> element.item.id !==id));
        };
        
        const clearAll=()=>{
            setCart([]);

        };
    return <CartContext.Provider value={{cart, addItem, removeItem, clearAll, items}}>
        {children}
    </CartContext.Provider>
}

export const useCart =()=> useContext(CartContext);