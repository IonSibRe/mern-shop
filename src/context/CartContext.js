import React, { useEffect, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";

const CartContext = React.createContext();

const initialState = {
	cart: [],
	total: 0,
	amount: 0,
};

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CartReducer, initialState);

	const addToCart = (id, title, price, img) => {
		const cartItem = { id, title, price, img, amount: 1, total: price };
		dispatch({ type: "ADD_TO_CART", payload: cartItem });
	};

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};

	const removeItem = (id) => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};

	const toggleAmount = (id, type) => {
		dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
	};

	useEffect(() => {
		dispatch({ type: "GET_TOTALS" });
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{ ...state, addToCart, clearCart, removeItem, toggleAmount }}
		>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
