import React, { useState, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductFilter from "./ProductFilter";
import ProductsDisplay from "./ProductsDisplay";
import Pagination from "./Pagination";
import loaderSpinner from "../../assets/loader-spinner.gif";

const ProductsSection = () => {
	const { currentProducts, isLoading } = useContext(ProductsContext);

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
				{isLoading ? (
					<div className="products-loader-wrap">
						<img
							src={loaderSpinner}
							alt="#"
							className="products-loader-spinner"
						/>
					</div>
				) : (
					<>
						<ProductsDisplay products={currentDisplayProducts} />
						<Pagination
							productsPerPage={productsPerPage}
							totalProducts={currentProducts.length}
							setCurrentPage={setCurrentPage}
						/>
					</>
				)}
			</section>
		</section>
	);
};

export default ProductsSection;
