const ProductsReducer = (state, action) => {
	switch (action.type) {
		case "GET_PRODUCTS":
			const products = action.payload.data.map((product) => {
				const img = action.payload.img;
				return { ...product, img };
			});

			const minPrice = Math.min(
				...[
					...new Set(
						action.payload.data.map((item) =>
							parseFloat(item.price)
						)
					),
				]
			);

			const maxPrice = Math.max(
				...[
					...new Set(
						action.payload.data.map((item) =>
							parseFloat(item.price)
						)
					),
				]
			);

			const manufacturersChecked = [
				...new Set(
					action.payload.data.map((item) => item.manufacturer)
				),
			];

			return {
				...state,
				allProducts: products,
				currentProducts: products,
				isLoading: false,
				currentMinPrice: minPrice,
				currentMaxPrice: maxPrice,
				manufacturersChecked,
			};

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

		case "SORT_CHECKBOXES":
			let currentIndex;
			let newChecked;
			let updatedProducts = [];

			// Sort Category
			if (action.payload.type === "sortCategory") {
				currentIndex = state.categoriesChecked.indexOf(
					action.payload.value
				);
				newChecked = [...state.categoriesChecked];

				currentIndex === -1
					? newChecked.push(action.payload.value)
					: newChecked.splice(currentIndex, 1);

				state.allProducts.forEach((product) => {
					if (
						(newChecked.includes(product.category) ||
							newChecked.includes("all")) &&
						state.manufacturersChecked.includes(
							product.manufacturer
						)
					) {
						updatedProducts.push(product);
					}
				});

				return {
					...state,
					categoriesChecked: newChecked,
					currentProducts: updatedProducts,
				};
			}

			// Sort Manufacturer
			if (action.payload.type === "sortManufacturer") {
				currentIndex = state.manufacturersChecked.indexOf(
					action.payload.value
				);
				newChecked = [...state.manufacturersChecked];

				currentIndex === -1
					? newChecked.push(action.payload.value)
					: newChecked.splice(currentIndex, 1);

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
			}

			return;

		case "CALCULATE_NEW_PRICES":
			const newPrices = [
				...new Set(
					state.currentProducts.map((product) => product.price)
				),
			];

			// No current products
			if (newPrices.length === 0) {
				return {
					...state,
					currentMaxPrice: 0,
					currentMinPrice: 0,
				};
			}

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
