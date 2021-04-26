import React, { useEffect, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";

const CartContext = React.createContext();

const initialState = {
	cart: localStorage.getItem("cart")
		? JSON.parse(localStorage.getItem("cart"))
		: [],
	total: 0,
	amount: 0,
};

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CartReducer, initialState);

	const addToCart = (id, title, price, img) => {
		const cartItem = { id, title, price, img, amount: 1, total: price };
		dispatch({ type: "ADD_TO_CART", payload: cartItem });
	};

	const addToCartSingleItem = (id, title, price, img, amount, total) => {
		const cartItem = { id, title, price, img, amount, total };
		dispatch({ type: "ADD_TO_CART_SINGLE_ITEM", payload: cartItem });
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
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{
				...state,
				addToCart,
				addToCartSingleItem,
				clearCart,
				removeItem,
				toggleAmount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
