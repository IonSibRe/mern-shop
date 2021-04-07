import React from "react";

const ProductsDisplay = ({ products }) => {
	return (
		<div className="products-showcase-inner-wrap">
			{products.map((product) => {
				const { id, title, price, img } = product;

				return (
					<div className="product-showcase-item" key={id}>
						<div className="product-item-img-wrap">
							<img
								src={img}
								alt={title}
								className="product-item-img"
							/>
						</div>
						<div className="product-item-text-wrap">
							<h4 className="product-item-title">{title}</h4>
							<h4 className="product-item-price">${price}</h4>
							<button className="product-add-btn">
								add to cart
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProductsDisplay;
