import React from "react";
import { Link } from "react-router-dom";

const BestSellersItem = ({ item }) => {
	const { img, title, price } = item;

	return (
		<div className="best-sellers-showcase-item">
			<div className="best-sellers-showcase-img-wrap">
				<img src={img} alt="#" className="best-sellers-showcase-img" />
			</div>
			<div className="best-sellers-showcase-text-wrap">
				<div className="best-sellers-showcase-text-inner-wrap">
					<h4 className="best-sellers-showcase-item-title">
						{title}
					</h4>
					<h4 className="best-sellers-showcase-item-stock">
						Availability: <span>In Stock</span>
					</h4>
					<p className="best-sellers-showcase-item-desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Enim vero fugiat doloribus iusto. Totam, maiores?
					</p>
					<h4 className="best-sellers-showcase-item-price">
						${price.toFixed(2)}
					</h4>
					<Link
						to="/cart"
						className="best-sellers-showcase-item-link"
					>
						add to cart
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BestSellersItem;
