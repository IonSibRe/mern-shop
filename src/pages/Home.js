import React from "react";
import Navbar from "../components/Navbar";
import MainShowcase from "../components/home/MainShowcase";
import "../css/home.scss";

const Home = () => {
	return (
		<>
			<Navbar />
			<MainShowcase />
		</>
	);
};

export default Home;
