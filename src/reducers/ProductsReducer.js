const ProductsReducer = (state, action) => {
	switch (action.type) {
		case "SORT_DEFAULT":
			if (action.payload === "new") {
				return {
					...state,
					currentlySortedBy: action.payload,
				};
			}

			if (action.payload === "price-low") {
				return {
					...state,
					currentProducts: state.currentProducts.sort(
						(a, b) => a.price - b.price
					),
					currentlySortedBy: action.payload,
				};
			}

			if (action.payload === "price-high") {
				return {
					...state,
					currentProducts: state.currentProducts.sort(
						(a, b) => b.price - a.price
					),
					currentlySortedBy: action.payload,
				};
			}

			return;

		case "SORT_PRICE":
			return {
				...state,
				currentProducts: state.allProducts.filter(
					(product) => product.price <= action.payload
				),
			};

		default:
			throw new Error("No method matched the dispatch");
	}
};

export default ProductsReducer;
