import React from "react";
import Navbar from "../components/Navbar";
import MainShowcase from "../components/home/MainShowcase";
import InfoBox from "../components/home/InfoBox";
import FeaturedProducts from "../components/home/FeaturedProducts";
import ProductCard from "../components/home/ProductCard";
import "../css/home.scss";

const Home = () => {
	return (
		<>
			<Navbar />
			<MainShowcase />
			<InfoBox />
			<FeaturedProducts />
			<ProductCard />
		</>
	);
};

export default Home;
