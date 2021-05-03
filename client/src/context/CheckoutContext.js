import React, { useContext, useReducer } from "react";
import CheckoutReducer from "../reducers/CheckoutReducer";
import { CartContext } from "./CartContext";

const CheckoutContext = React.createContext();

const initialState = {
	shippingAddress: localStorage.getItem("shippingAddress")
		? JSON.parse(localStorage.getItem("shippingAddress"))
		: {},
	paymentMethod: "PayPal",
	order: {},
	allOrders: [],
	success: false,
	successPay: false,
	loading: true,
	errorPay: false,
	error: "",
};

const CheckoutProvider = ({ children }) => {
	const { clearCart } = useContext(CartContext);
	const [state, dispatch] = useReducer(CheckoutReducer, initialState);

	const url = "/api/v1/orders";

	// Shipping Address
	const saveShippingAddress = (data) => {
		dispatch({ type: "CART_SAVE_SHIPPING_ADDRESS", payload: data });
		localStorage.setItem("shippingAddress", JSON.stringify(data));
	};

	// Payment Method
	const savePaymentMethod = (data) => {
		dispatch({ type: "CART_SAVE_PAYMENT_METHOD", payload: data });
	};

	// Create Order
	const createOrder = async (order) => {
		dispatch({ type: "ORDER_CREATE_REQUEST" });

		try {
			const localLogin = JSON.parse(localStorage.getItem("login"));

			if (!localLogin) {
				console.error("User isn't logged in");
				return;
			}

			const res = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"auth-token": localLogin.token,
				},
				body: JSON.stringify(order),
			});

			const data = await res.json();

			dispatch({ type: "ORDER_CREATE_SUCCESS", payload: data.order });

			// Clear cart from state and local storage
			clearCart();
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

	// Get Order Details
	const getOrderDetails = async (id) => {
		dispatch({ type: "ORDER_DETAILS_REQUEST" });

		try {
			const localLogin = JSON.parse(localStorage.getItem("login"));

			const res = await fetch(`${url}/${id}`, {
				headers: {
					"auth-token": localLogin.token,
				},
			});

			const data = await res.json();

			dispatch({ type: "ORDER_DETAILS_SUCCESS", payload: data.order });
		} catch (err) {
			const msg =
				err.response && err.response.data.message
					? err.response.data.message
					: err.message;
			dispatch({ type: "ORDER_DETAILS_ERROR", payload: msg });
		}
	};

	// Pay Order
	const payOrder = async (order, paymentResult) => {
		dispatch({ type: "ORDER_PAY_REQUEST" });

		try {
			const localLogin = JSON.parse(localStorage.getItem("login"));

			const res = await fetch(`${url}/${order._id}/pay`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"auth-token": localLogin.token,
				},
				body: JSON.stringify(paymentResult),
			});

			const data = await res.json();

			dispatch({ type: "ORDER_PAY_SUCCESS", payload: data });
		} catch (err) {
			const msg =
				err.response && err.response.data.message
					? err.response.data.message
					: err.message;
			dispatch({ type: "ORDER_PAY_ERROR", payload: msg });
		}
	};

	const getAllOrders = async () => {
		dispatch({ type: "ORDER_GET_ALL_REQUEST" });

		try {
			const localLogin = JSON.parse(localStorage.getItem("login"));

			const res = await fetch(`${url}/all`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"auth-token": localLogin.token,
				},
				body: JSON.stringify({ user_id: localLogin._id }),
			});

			const data = await res.json();

			dispatch({
				type: "ORDER_GET_ALL_SUCCESS",
				payload: data.allOrders,
			});
		} catch (err) {
			const msg =
				err.response && err.response.data.message
					? err.response.data.message
					: err.message;
			dispatch({ type: "ORDER_GET_ALL_ERROR", payload: msg });
		}
	};

	const setLoading = () => {
		dispatch({ type: "SET_LOADING" });
	};

	// Reset Order
	const resetOrder = () => {
		dispatch({ type: "ORDER_CREATE_RESET" });
	};

	// Reset Order Pay
	const resetOrderPay = () => {
		dispatch({ type: "ORDER_PAY_RESET" });
	};

	return (
		<CheckoutContext.Provider
			value={{
				...state,
				saveShippingAddress,
				savePaymentMethod,
				createOrder,
				setLoading,
				getAllOrders,
				getOrderDetails,
				payOrder,
				resetOrderPay,
				resetOrder,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
};

export { CheckoutContext, CheckoutProvider };
