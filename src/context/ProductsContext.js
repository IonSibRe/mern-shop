import React, { useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductsReducer from "../reducers/ProductsReducer";
import {
	home_showcase_img_1,
	home_showcase_img_2,
	home_showcase_img_3,
	home_showcase_img_4,
	home_showcase_img_5,
	home_showcase_img_6,
	home_showcase_img_7,
	home_showcase_img_8,
} from "../sample_data/home_images";

const ProductsContext = React.createContext();

const productsData = [
	{
		id: uuidv4(),
		title: "television",
		category: "television",
		manufacturer: "samsung",
		price: 200.0,
		img: home_showcase_img_1,
	},
	{
		id: uuidv4(),
		title: "reproducer",
		category: "reproducer",
		manufacturer: "samsung",
		price: 80.0,
		img: home_showcase_img_2,
	},
	{
		id: uuidv4(),
		title: "headphones",
		category: "headphones",
		manufacturer: "jbl",
		price: 60.0,
		img: home_showcase_img_3,
	},
	{
		id: uuidv4(),
		title: "reproducer",
		category: "reproducer",
		manufacturer: "jbl",
		price: 1100.0,
		img: home_showcase_img_4,
	},
	{
		id: uuidv4(),
		title: "Lorem ipsum sit.",
		category: "television",
		manufacturer: "samsung",
		price: 20.0,
		img: home_showcase_img_5,
	},
	{
		id: uuidv4(),
		title: "Lorem ipsum sit.",
		category: "television",
		manufacturer: "samsung",
		price: 1000.0,
		img: home_showcase_img_6,
	},
	{
		id: uuidv4(),
		title: "Lorem ipsum sit.",
		category: "television",
		manufacturer: "logitech",
		price: 20.0,
		img: home_showcase_img_7,
	},
	{
		id: uuidv4(),
		title: "Lorem ipsum sit.",
		category: "reproducer",
		manufacturer: "samsung",
		price: 45.0,
		img: home_showcase_img_8,
	},
	{
		id: uuidv4(),
		title: "Lorem ipsum sit.",
		category: "reproducer",
		manufacturer: "logitech",
		price: 40.0,
		img: home_showcase_img_5,
	},
	{
		id: uuidv4(),
		title: "Lorem ipsum sit.",
		category: "reproducer",
		manufacturer: "jbl",
		price: 20.0,
		img: home_showcase_img_6,
	},
	{
		id: uuidv4(),
		title: "Lorem ipsum sit.",
		category: "headphones",
		manufacturer: "logitech",
		price: 20.0,
		img: home_showcase_img_7,
	},
	{
		id: uuidv4(),
		title: "Lorem ipsum sit.",
		category: "headphones",
		manufacturer: "jbl",
		price: 20.0,
		img: home_showcase_img_8,
	},
];

const initialState = {
	allProducts: productsData,
	currentProducts: productsData,
	isLoading: false,
	currentMinPrice: Math.min(
		...[...new Set(productsData.map((item) => parseFloat(item.price)))]
	),
	currentMaxPrice: Math.max(
		...[...new Set(productsData.map((item) => parseFloat(item.price)))]
	),
	currentlySortedBy: "new",
	manufacturersChecked: [
		...new Set(productsData.map((item) => item.manufacturer)),
	],
	categoriesChecked: ["all"],
};

const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProductsReducer, initialState);

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

	useEffect(() => {
		dispatch({ type: "SORT_DEFAULT", payload: state.currentlySortedBy });
	}, [state.currentProducts, state.currentlySortedBy]);

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
