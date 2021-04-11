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

			newProducts = newProducts.filter(
				(product) =>
					(state.manufacturersChecked.includes(
						product.manufacturer
					) &&
						state.categoriesChecked.includes(product.category)) ||
					state.categoriesChecked.includes("all")
			);

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

			const updatedProducts = [];

			state.allProducts.forEach((product) => {
				if (
					newChecked.includes(product.manufacturer) &&
					(state.categoriesChecked.includes(product.category) ||
						state.categoriesChecked.includes("all"))
				) {
					updatedProducts.push(product);
				}
			});

			return {
				...state,
				manufacturersChecked: newChecked,
				currentProducts: updatedProducts,
			};

		case "SORT_CATEGORY":
			const currentCategoryIndex = state.categoriesChecked.indexOf(
				action.payload
			);

			const newCategoriesChecked = [...state.categoriesChecked];

			currentCategoryIndex === -1
				? newCategoriesChecked.push(action.payload)
				: newCategoriesChecked.splice(currentCategoryIndex, 1);

			let sortedProducts = [];

			state.allProducts.forEach((product) => {
				if (
					(newCategoriesChecked.includes(product.category) ||
						newCategoriesChecked.includes("all")) &&
					state.manufacturersChecked.includes(product.manufacturer)
				) {
					sortedProducts.push(product);
				}
			});

			console.log(sortedProducts);

			return {
				...state,
				categoriesChecked: newCategoriesChecked,
				currentProducts: sortedProducts,
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
