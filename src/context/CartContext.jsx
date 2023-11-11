import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	return <CartContext.Provider value={{ cartItems, setCartItems, name: "Rıdvan Eren Eldem" }}>{children}</CartContext.Provider>;
}

export default CartProvider;
