import { createContext, useContext, useState } from "react";


export const CartContext = createContext(false)

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [showCart, setShowCart] = useState(false)
    
    return(
        <CartContext.Provider value={{showCart, setShowCart}} >
            {children}
        </CartContext.Provider>
    )
}
