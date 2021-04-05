import React from "react";
import Navbar from "../components/Navbar";
import ContactSection from "../components/contact/ContactSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Contact = () => {
	return (
		<>
			<Navbar />
			<ContactSection />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Contact;
