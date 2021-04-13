import React from "react";
import { product_card_img } from "../../sample_data/home_images";
import { Link } from "react-router-dom";

const ProductCard = () => {
	const bgImage = {
		background: `url(${product_card_img}) no-repeat center center/cover`,
	};

	return (
		<section className="product-card section-center" style={bgImage}>
			<div className="product-text-wrap">
				<h2 className="product-card-title">
					T12 Bluetooth <strong>In-Ear</strong> Headset
				</h2>
				<h4 className="product-card-desc">
					Volume Adjustment / Only 6.5g / Bluetooth 4.1 HD Calls
				</h4>
				<h3 className="product-card-price">$97.99</h3>
				<Link to="/products" className="product-card-btn">
					shop now
				</Link>
			</div>
		</section>
	);
};

export default ProductCard;
