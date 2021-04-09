import React, { useState, useContext } from "react";
import ProductFilter from "./ProductFilter";
import ProductsDisplay from "./ProductsDisplay";
import Pagination from "./Pagination";
import { ProductsContext } from "../../context/ProductsContext";

const ProductsSection = () => {
	const { currentProducts } = useContext(ProductsContext);

	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 9;

	// Get Current Posts
	const lastProductIndex = currentPage * productsPerPage;
	const firstProductIndex = lastProductIndex - productsPerPage;
	const currentDisplayProducts = currentProducts.slice(
		firstProductIndex,
		lastProductIndex
	);

	return (
		<section className="ps-wrap section-center">
			<ProductFilter />
			<section className="products-showcase-wrap">
				<ProductsDisplay products={currentDisplayProducts} />
				<Pagination
					productsPerPage={productsPerPage}
					totalProducts={currentProducts.length}
					setCurrentPage={setCurrentPage}
				/>
			</section>
		</section>
	);
};

export default ProductsSection;
