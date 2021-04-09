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
							<h3 className="cart-header-title">product</h3>
							<h3 className="cart-header-title">product name</h3>
							<h3 className="cart-header-title">price</h3>
							<h3 className="cart-header-title">qty</h3>
							<h3 className="cart-header-title">total</h3>
							<h3 className="cart-header-title">remove</h3>
						</div>

						<div className="cart-items-wrap">
							{cart.map((item) => {
								return <CartItem item={item} key={item.id} />;
							})}
						</div>
					</div>
					<div className="cart-btns-wrap" onClick={clearCart}>
						<button className="cart-clear-btn">clear cart</button>
					</div>
				</>
			)}
		</section>
	);
};

export default CartShowcase;
