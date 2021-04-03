import React from "react";
import { Link } from "react-router-dom";
import "../css/global/_footer.scss";
import { v4 as uuidv4 } from "uuid";
import {
	footer_paypal,
	footer_mastercard,
	footer_visa,
} from "../sample_data/home_images";

const infoLinks = [
	"delivery",
	"about us",
	"secure payment",
	"contact us",
	"sitemap",
	"stores",
];

const customLinks = [
	"legal notice",
	"prices drop",
	"new products",
	"best sales",
	"login",
	"my account",
];

const servicesLinks = [
	"services",
	"PC building",
	"installment sale",
	"track an order",
	"return policy",
	"privacy & security",
];

const paymentData = [
	{ id: 1, img: footer_paypal },
	{ id: 2, img: footer_mastercard },
	{ id: 3, img: footer_visa },
];

const socialIcons = [
	{ id: 1, icon: "fab fa-facebook facebook-icon" },
	{ id: 2, icon: "fab fa-instagram instagram-icon" },
	{ id: 3, icon: "fab fa-twitter twitter-icon" },
];

const footerLinks = [
	{ id: 1, name: "online shopping" },
	{ id: 2, name: "promotions" },
	{ id: 3, name: "my orders" },
	{ id: 4, name: "help" },
	{ id: 5, name: "customer service" },
	{ id: 6, name: "support" },
	{ id: 7, name: "most popular" },
	{ id: 8, name: "new arrivals" },
	{ id: 9, name: "special products" },
	{ id: 10, name: "manufacturers" },
	{ id: 11, name: "our stores" },
	{ id: 12, name: "shipping" },
	{ id: 13, name: "payments" },
	{ id: 14, name: "warrantee" },
	{ id: 15, name: "refunds" },
	{ id: 16, name: "checkout" },
	{ id: 17, name: "discount" },
	{ id: 18, name: "terms & conditions" },
];

const Footer = () => {
	return (
		<footer className="footer-container">
			<FooterMain />
			<FooterSocials />
			<FooterLinks />
			<FooterFinal />
		</footer>
	);
};

const FooterMain = () => {
	return (
		<div className="f-main-wrap">
			<div className="f-main-inner-wrap">
				<div className="f-main-title-wrap f-main-item">
					<h2 className="f-main-title">MERN</h2>
					<p className="f-main-desc">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Consequuntur eum earum nostrum in qui unde.
					</p>
					<p className="f-main-address">
						<span>address:</span> 1563 Horizon Circle Seattle
					</p>
					<p className="f-main-email">
						<span>email:</span> example@example.com
					</p>
					<p className="f-main-phone">
						<span>call us:</span> 253-617-3893
					</p>
				</div>
				<div className="f-main-links-wrap f-main-item">
					<h3 className="f-main-info-title f-main-sm-title">
						information
					</h3>
					{infoLinks.map((link) => (
						<Link
							to="/about"
							className="f-main-link"
							key={uuidv4()}
						>
							{link}
						</Link>
					))}
				</div>
				<div className="f-main-links-wrap f-main-item">
					<h3 className="f-main-custom-links-title f-main-sm-title">
						custom links
					</h3>
					{customLinks.map((link) => (
						<Link
							to="/login"
							className="f-main-link"
							key={uuidv4()}
						>
							{link}
						</Link>
					))}
				</div>
				<div className="f-main-links-wrap f-main-item">
					<h3 className="f-main-info-title f-main-sm-title">
						services
					</h3>
					{servicesLinks.map((link) => (
						<Link
							to="/contact"
							className="f-main-link"
							key={uuidv4()}
						>
							{link}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

const FooterSocials = () => {
	return (
		<div className="footer-socials-wrap">
			<div className="footer-socials-inner-wrap">
				<div className="payment-wrap">
					<div className="payment-title-wrap">
						<h3 className="payment-title footer-socials-title">
							payment:{" "}
						</h3>
					</div>
					<div className="payment-links-wrap">
						{paymentData.map((item) => {
							const { id, img } = item;
							return (
								<Link
									to="/checkout"
									className="payment-link"
									key={id}
								>
									<img
										src={img}
										alt="#"
										className="payment-link-img"
									/>
								</Link>
							);
						})}
					</div>
				</div>
				<div className="follow-us-wrap">
					<div className="follow-us-title-wrap">
						<h3 className="follow-us-title footer-socials-title">
							follow us:{" "}
						</h3>
					</div>
					<div className="follow-us-links-wrap">
						{socialIcons.map((item) => {
							const { id, icon } = item;
							return (
								<Link
									to="/checkout"
									className="follow-us-link"
									key={id}
								>
									<i className={icon}></i>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

const FooterLinks = () => {
	return (
		<div className="footer-links-wrap">
			<div className="footer-links-inner-wrap">
				{footerLinks.map((item) => {
					const { id, name } = item;

					return (
						<Link to="/contact" className="footer-link" key={id}>
							{name}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

const FooterFinal = () => {
	return (
		<div className="footer-final-wrap">
			<h4 className="footer-final-desc">
				copyright &copy; all rights reserved.
			</h4>
		</div>
	);
};

export default Footer;
