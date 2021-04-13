import React from "react";
import { Link } from "react-router-dom";

const FeaturedProductsItem = ({ item }) => {
	const { img, title, price } = item;

	return (
		<div className="fp-showcase-item">
			<div className="fp-showcase-img-wrap">
				<img src={img} alt="#" className="fp-showcase-img" />
			</div>
			<div className="fp-showcase-text-wrap">
				<h4 className="fp-showcase-item-title">{title}</h4>
				<h4 className="fp-showcase-item-price">${price.toFixed(2)}</h4>
				<Link to="/cart" className="fp-showcase-item-link">
					add to cart
				</Link>
			</div>
		</div>
	);
};

export default FeaturedProductsItem;
