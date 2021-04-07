import React from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductsSection from "../components/products/ProductsSection";

const Products = () => {
	return (
		<div>
			<Navbar />
			<ProductsSection />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Products;
