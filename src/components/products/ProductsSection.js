import React, { useState } from "react";
import ProductFilter from "./ProductFilter";
import { v4 as uuidv4 } from "uuid";
import {
	home_showcase_img_1,
	home_showcase_img_2,
	home_showcase_img_3,
	home_showcase_img_4,
	home_showcase_img_5,
	home_showcase_img_6,
	home_showcase_img_7,
	home_showcase_img_8,
} from "../../sample_data/home_images";
import ProductsDisplay from "./ProductsDisplay";
import Pagination from "./Pagination";

const ProductsSection = () => {
	const data = [
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "television",
			manufacturer: "samsung",
			price: "20.00",
			img: home_showcase_img_1,
		},
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "reproducer",
			manufacturer: "jbl",
			price: "20.00",
			img: home_showcase_img_2,
		},
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "headphones",
			manufacturer: "logitech",
			price: "20.00",
			img: home_showcase_img_3,
		},
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "reproducer",
			manufacturer: "jbl",
			price: "20.00",
			img: home_showcase_img_4,
		},
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "television",
			manufacturer: "samsung",
			price: "20.00",
			img: home_showcase_img_5,
		},
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "reproducer",
			manufacturer: "jbl",
			price: "20.00",
			img: home_showcase_img_6,
		},
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "headphones",
			manufacturer: "logitech",
			price: "20.00",
			img: home_showcase_img_7,
		},
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "reproducer",
			manufacturer: "jbl",
			price: "20.00",
			img: home_showcase_img_8,
		},
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "television",
			manufacturer: "samsung",
			price: "20.00",
			img: home_showcase_img_5,
		},
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "reproducer",
			manufacturer: "jbl",
			price: "20.00",
			img: home_showcase_img_6,
		},
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "headphones",
			manufacturer: "logitech",
			price: "20.00",
			img: home_showcase_img_7,
		},
		{
			id: uuidv4(),
			title: "Lorem ipsum dolor sit.",
			category: "reproducer",
			manufacturer: "jbl",
			price: "20.00",
			img: home_showcase_img_8,
		},
	];

	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 9;

	// Get Current Posts
	const lastProductIndex = currentPage * productsPerPage;
	const firstProductIndex = lastProductIndex - productsPerPage;
	const currentProducts = data.slice(firstProductIndex, lastProductIndex);

	return (
		<section className="ps-wrap section-center">
			<ProductFilter data={data} />
			<section className="products-showcase-wrap">
				<ProductsDisplay products={currentProducts} />
				<Pagination
					productsPerPage={productsPerPage}
					totalProducts={data.length}
					setCurrentPage={setCurrentPage}
				/>
			</section>
		</section>
	);
};

export default ProductsSection;
