const CheckoutReducer = (state, action) => {
	switch (action.type) {
		// Shipping Address
		case "CART_SAVE_SHIPPING_ADDRESS":
			return {
				...state,
				shippingAddress: action.payload,
			};

		// Payment Method
		case "CART_SAVE_PAYMENT_METHOD":
			return {
				...state,
				paymentMethod: action.payload,
			};

		// Create Order
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
				loading: true,
				success: false,
				error: "",
			};

		// Order Details
		case "ORDER_DETAILS_REQUEST":
			return {
				...state,
				loading: true,
			};

		case "ORDER_DETAILS_SUCCESS":
			return {
				...state,
				loading: false,
				order: action.payload,
			};

		case "ORDER_DETAILS_ERROR":
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		// Order Pay
		case "ORDER_PAY_REQUEST":
			return {
				...state,
				loading: true,
			};

		case "ORDER_PAY_SUCCESS":
			return {
				...state,
				loading: false,
				successPay: true,
			};

		case "ORDER_PAY_ERROR":
			return {
				...state,
				loading: false,
				errorPay: action.payload,
			};

		case "ORDER_PAY_RESET":
			return {
				...state,
				loading: true,
				successPay: false,
				errorPay: "",
			};

		case "ORDER_GET_ALL_REQUEST":
			return {
				...state,
				loading: true,
			};

		case "ORDER_GET_ALL_SUCCESS":
			return {
				loading: false,
				allOrders: action.payload,
			};

		case "ORDER_GET_ALL_ERROR":
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case "SET_LOADING":
			return {
				...state,
				loading: false,
			};

		default:
			throw new Error("No method matched the dispatch");
	}
};

export default CheckoutReducer;
