import React from "react";
import Navbar from "../components/Navbar";
import MainShowcase from "../components/home/MainShowcase";
import InfoBox from "../components/home/InfoBox";
import FeaturedProducts from "../components/home/FeaturedProducts";
import ProductCard from "../components/home/ProductCard";
import BestSellers from "../components/home/BestSellers";
import CardShowcase from "../components/home/CardShowcase";
import NewArrivals from "../components/home/NewArrivals";
import TripleCardShowcase from "../components/home/TripleCardShowcase";
import TripleSlider from "../components/home/TripleSlider";
import PopularCategories from "../components/home/PopularCategories";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Navbar />
			<MainShowcase />
			<InfoBox />
			<FeaturedProducts />
			<ProductCard />
			<BestSellers />
			<CardShowcase />
			<NewArrivals />
			<TripleCardShowcase />
			<TripleSlider />
			<PopularCategories />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Home;
