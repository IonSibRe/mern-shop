import React, { useEffect, useReducer } from "react";
import ProductsReducer from "../reducers/ProductsReducer";
import axios from "axios";
import { productImage } from "../sample_data/home_images";

const ProductsContext = React.createContext();

const initialState = {
	allProducts: [],
	currentProducts: [],
	isLoading: false,
	currentMinPrice: 0,
	currentMaxPrice: 0,
	currentlySortedBy: "new",
	manufacturersChecked: [],
	categoriesChecked: ["all"],
};

const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProductsReducer, initialState);

	// Get Products
	const getProducts = async () => {
		try {
			state.isLoading = true;
			const res = await axios.get("/api/v1/products");

			dispatch({
				type: "GET_PRODUCTS",
				payload: { data: res.data.data, img: productImage },
			});
		} catch (err) {
			console.log(err.response.data.error);
		}
	};

	// Sort
	const sortDefault = (value) => {
		dispatch({ type: "SORT_DEFAULT", payload: value });
	};

	// Sort Price
	const sortPrice = (price) => {
		dispatch({ type: "SORT_PRICE", payload: price });
	};

	// Sort Manufacturer
	const sortManufacturer = (manufacturer) => {
		dispatch({
			type: "SORT_CHECKBOXES",
			payload: { value: manufacturer, type: "sortManufacturer" },
		});
		dispatch({ type: "CALCULATE_NEW_PRICES" });
	};

	// Sort Category
	const sortCategory = (category) => {
		dispatch({
			type: "SORT_CHECKBOXES",
			payload: { value: category, type: "sortCategory" },
		});
		dispatch({ type: "CALCULATE_NEW_PRICES" });
	};

	// Sort when products change
	useEffect(() => {
		dispatch({ type: "SORT_DEFAULT", payload: state.currentlySortedBy });
	}, [state.currentProducts, state.currentlySortedBy]);

	// Get Products from DB
	useEffect(() => {
		getProducts();
	}, []);

	return (
		<ProductsContext.Provider
			value={{
				...state,
				sortDefault,
				sortPrice,
				sortManufacturer,
				sortCategory,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export { ProductsContext, ProductsProvider };
