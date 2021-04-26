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

		default:
			throw new Error("No method matched the dispatch");
	}
};

export default CheckoutReducer;
