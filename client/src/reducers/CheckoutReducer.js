const CheckoutReducer = (state, action) => {
	switch (action.type) {
		case "CART_SAVE_SHIPPING_ADDRESS":
			return {
				...state,
				shippingAddress: action.payload,
			};

		case "CART_SAVE_PAYMENT_METHOD":
			return {
				...state,
				paymentMethod: action.payload,
			};

		case "ORDER_CREATE_REQUEST":
			return {
				...state,
				loading: true,
			};

		case "ORDER_CREATE_SUCCESS":
			return {
				...state,
				loading: false,
				success: true,
				order: action.payload,
			};

		case "ORDER_CREATE_ERROR":
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case "ORDER_CREATE_RESET":
			return {
				...state,
				order: [],
				loading: false,
				success: false,
				error: "",
			};

		default:
			throw new Error("No method matched the dispatch");
	}
};

export default CheckoutReducer;
