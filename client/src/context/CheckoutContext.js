import React, { useReducer } from "react";
import CheckoutReducer from "../reducers/CheckoutReducer";

const CheckoutContext = React.createContext();

const initialState = {
	shippingAddress: localStorage.getItem("shippingAddress")
		? JSON.parse(localStorage.getItem("shippingAddress"))
		: {},
	paymentMethod: "PayPal",
};

const CheckoutProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CheckoutReducer, initialState);

	const saveShippingAddress = (data) => {
		dispatch({ type: "CART_SAVE_SHIPPING_ADDRESS", payload: data });
		localStorage.setItem("shippingAddress", JSON.stringify(data));
	};

	const savePaymentMethod = (data) => {
		dispatch({ type: "CART_SAVE_PAYMENT_METHOD", payload: data });
	};

	return (
		<CheckoutContext.Provider
			value={{ ...state, saveShippingAddress, savePaymentMethod }}
		>
			{children}
		</CheckoutContext.Provider>
	);
};

export { CheckoutContext, CheckoutProvider };
