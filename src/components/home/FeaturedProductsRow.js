import React from "react";
import { Link } from "react-router-dom";

const FeaturedProductsRow = ({ data, row }) => {
	const maxOnRow = Math.ceil(data.length / 2);
	const startIndex = maxOnRow * row;
	const endIndex = startIndex + maxOnRow;

	return (
		<div className="fp-showcase-inner-wrap" key={row}>
			{data
				.filter(
					(item, index) => index >= startIndex && index < endIndex
				)
				.map((item) => {
					const { id, img, title, price } = item;

					return (
						<div className={`fp-showcase-item`} key={id}>
							<div className="fp-showcase-img-wrap">
								<img
									src={img}
									alt="#"
									className="fp-showcase-img"
								/>
							</div>
							<div className="fp-showcase-text-wrap">
								<h4 className="fp-showcase-item-title">
									{title}
								</h4>
								<h4 className="fp-showcase-item-price">
									${price.toFixed(2)}
								</h4>
								<Link
									to="/cart"
									className="fp-showcase-item-link"
								>
									add to cart
								</Link>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default FeaturedProductsRow;
