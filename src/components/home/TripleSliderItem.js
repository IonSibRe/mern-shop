import React from "react";
import { Link } from "react-router-dom";

const TripleSliderItem = ({ item }) => {
	const { img, title, price } = item;

	return (
		<div className="ts-showcase-item">
			<div className="ts-showcase-img-wrap">
				<img src={img} alt="#" className="ts-showcase-img" />
			</div>
			<div className="ts-showcase-text-wrap">
				<h4 className="ts-showcase-item-title">{title}</h4>
				<h4 className="ts-showcase-item-price">${price.toFixed(2)}</h4>
				<Link to="/cart" className="ts-showcase-item-link">
					add to cart
				</Link>
			</div>
		</div>
	);
};

export default TripleSliderItem;
