import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const [isDarkMode, changeMod] = useState(false);

	return <CartContext.Provider value={{ cartItems, setCartItems, name: "Rıdvan Eren Eldem", isDarkMode, changeMod }}>{children}</CartContext.Provider>;
}

export default CartProvider;
