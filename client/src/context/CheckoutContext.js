import React, { useReducer } from "react";
import CheckoutReducer from "../reducers/CheckoutReducer";

const CheckoutContext = React.createContext();

const initialState = {
	shippingAddress: localStorage.getItem("shippingAddress")
		? JSON.parse(localStorage.getItem("shippingAddress"))
		: {},
	paymentMethod: "PayPal",
	order: [],
	loading: false,
	success: false,
	error: "",
};

const CheckoutProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CheckoutReducer, initialState);

	const url = "http://localhost:5000/api/v1/orders";

	const saveShippingAddress = (data) => {
		dispatch({ type: "CART_SAVE_SHIPPING_ADDRESS", payload: data });
		localStorage.setItem("shippingAddress", JSON.stringify(data));
	};

	const savePaymentMethod = (data) => {
		dispatch({ type: "CART_SAVE_PAYMENT_METHOD", payload: data });
	};

	const createOrder = async (order) => {
		dispatch({ type: "ORDER_CREATE_REQUEST", payload: order });

		try {
			const localLogin = JSON.parse(localStorage.getItem("login"));

			if (!localLogin) {
				console.log("User isn't logged in");
				return;
			}

			console.log(JSON.stringify(order));

			const res = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"auth-token": localLogin.token,
				},
				body: JSON.stringify(order),
			});

			const data = await res.json();

			console.log(data);

			dispatch({ type: "ORDER_CREATE_SUCCESS", payload: data.order });
			localStorage.removeItem("cart");
		} catch (err) {
			dispatch({
				type: "ORDER_CREATE_ERROR",
				payload:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};

	const resetOrder = () => {
		dispatch({ type: "ORDER_CREATE_RESET" });
	};

	return (
		<CheckoutContext.Provider
			value={{
				...state,
				saveShippingAddress,
				savePaymentMethod,
				createOrder,
				resetOrder,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
};

export { CheckoutContext, CheckoutProvider };
