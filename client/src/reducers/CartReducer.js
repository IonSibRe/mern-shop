const CartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			console.log(action.payload);

			return {
				...state,
				cart: [...state.cart, action.payload],
				amount: state.amount + 1,
			};

		case "CLEAR_CART":
			return {
				...state,
				cart: [],
				amount: 0,
				total: 0,
			};

		case "REMOVE_ITEM":
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
				amount: state.amount - 1,
			};

		case "TOGGLE_AMOUNT":
			const tempCart = state.cart.map((item) => {
				if (item.id === action.payload.id) {
					const price = parseFloat(item.price);
					const total = parseFloat(item.total);

					if (action.payload.type === "inc") {
						const itemTotal = total + price;
						return {
							...item,
							amount: item.amount + 1,
							total: itemTotal.toFixed(2),
						};
					}
					if (action.payload.type === "dec" && item.amount > 1) {
						const itemTotal = total - price;
						return {
							...item,
							amount: item.amount - 1,
							total: itemTotal.toFixed(2),
						};
					}
				}

				return item;
			});

			return {
				...state,
				cart: tempCart,
			};

		case "GET_TOTALS":
			let { total, amount } = state.cart.reduce(
				(cartTotal, cartItem) => {
					const { price, amount } = cartItem;
					const itemTotal = price * amount;

					cartTotal.total += itemTotal;
					cartTotal.amount += amount;

					return cartTotal;
				},
				{
					total: 0,
					amount: 0,
				}
			);

			total = parseFloat(total.toFixed(2));
			return { ...state, total, amount };

		default:
			throw new Error("No method matched the dispatch");
	}
};

export default CartReducer;
