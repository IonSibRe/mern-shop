import React from "react";
import Navbar from "../components/Navbar";
import WelcomeSection from "../components/about/WelcomeSection";
import InfoSection from "../components/about/InfoSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const About = () => {
	return (
		<>
			<Navbar />
			<WelcomeSection />
			<InfoSection />
			<Newsletter />
			<Footer />
		</>
	);
};

export default About;
