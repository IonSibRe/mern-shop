import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

const CartShowcase = () => {
	const { cart, clearCart } = useContext(CartContext);

	return (
		<section className="cart-showcase-wrap section-center">
			{cart.length === 0 ? (
				<div className="cart-empty-wrap">
					<i className="fas fa-shopping-cart cart-empty-icon"></i>
					<h2 className="cart-empty-title">your cart is empty</h2>
					<Link to="/products" className="cart-empty-link">
						shop
					</Link>
				</div>
			) : (
				<>
					<h2 className="cart-heading-title">your cart items</h2>
					<div className="cart-wrap">
						<div className="cart-header-wrap">
							<h3 className="cart-header-title cart-header-product">
								product
							</h3>
							<h3 className="cart-header-title cart-header-name">
								name
							</h3>
							<h3 className="cart-header-title cart-header-price">
								price
							</h3>
							<h3 className="cart-header-title cart-header-qty">
								qty
							</h3>
							<h3 className="cart-header-title cart-header-total">
								total
							</h3>
							<h3 className="cart-header-title cart-header-remove">
								remove
							</h3>
						</div>

						<div className="cart-items-wrap">
							{cart.map((item) => {
								return <CartItem item={item} key={item.id} />;
							})}
						</div>
					</div>
					<div className="cart-btns-wrap">
						<Link
							to="/shipping"
							className="cart-btn cart-order-btn"
						>
							place order
						</Link>
						<button className="cart-btn" onClick={clearCart}>
							clear cart
						</button>
					</div>
				</>
			)}
		</section>
	);
};

export default CartShowcase;
