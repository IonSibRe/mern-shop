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
			let newProducts = [...state.allProducts];

			newProducts = newProducts.filter(product => state.manufacturersChecked.includes(product.manufacturer));

			return {
				...state,
				currentProducts: newProducts.filter(
					(product) => product.price <= action.payload
				),
			};

		case "SORT_MANUFACTURER":
			const currentIndex = state.manufacturersChecked.indexOf(
				action.payload
			);
			const newChecked = [...state.manufacturersChecked];

			currentIndex === -1
				? newChecked.push(action.payload)
				: newChecked.splice(currentIndex, 1);

			let updatedProducts = [];

			state.allProducts.forEach(product => {
				if (newChecked.includes(product.manufacturer)) {
					updatedProducts.push(product);
				}
			})

			return {
				...state,
				manufacturersChecked: newChecked,
				currentProducts: updatedProducts,
			};

		case "CALCULATE_NEW_PRICES":
			const newPrices = [
				...new Set(
					state.currentProducts.map((product) => product.price)
				),
			];

			return {
				...state,
				currentMaxPrice: Math.max(...newPrices),
				currentMinPrice: Math.min(...newPrices),
			};

		default:
			throw new Error("No method matched the dispatch");
	}
};

export default ProductsReducer;
