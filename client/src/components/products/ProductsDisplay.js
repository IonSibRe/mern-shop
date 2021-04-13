import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductsDisplay = ({ products }) => {
	const { cart, addToCart } = useContext(CartContext);

	return (
		<div className="products-showcase-inner-wrap">
			{products.map((product) => {
				const { _id, title, price, img } = product;
				let inCart;

				cart.forEach((item) => {
					if (item._id === _id) inCart = true;
				});

				return (
					<div className="product-showcase-item" key={_id}>
						<div className="product-item-img-wrap">
							<img
								src={img}
								alt={title}
								className="product-item-img"
							/>
						</div>
						<div className="product-item-text-wrap">
							<h4 className="product-item-title">{title}</h4>
							<h4 className="product-item-price">
								${price.toFixed(2)}
							</h4>
							<button
								disabled={inCart}
								className={`product-add-btn ${
									inCart && "btn-disabled"
								}`}
								onClick={() =>
									addToCart(_id, title, price, img)
								}
							>
								{inCart ? "in cart" : "add to cart"}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProductsDisplay;
