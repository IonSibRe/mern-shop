import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
	const { removeItem, toggleAmount } = useContext(CartContext);
	const { id, title, price, amount, total, img } = item;
	return (
		<div className="cart-item">
			<div className="cart-item-inner-wrap">
				<img src={img} alt={title} className="cart-item-img" />
			</div>
			<div className="cart-item-inner-wrap">
				<h4 className="cart-item-desc cart-item-title">{title}</h4>
			</div>
			<div className="cart-item-inner-wrap">
				<h4 className="cart-item-desc cart-item-price">${price}</h4>
			</div>
			<div className="cart-item-inner-wrap">
				<div className="cart-qty-wrap">
					<span
						className="cart-qty-sign"
						onClick={() => toggleAmount(id, "dec")}
					>
						-
					</span>
					<h4 className="cart-item-desc cart-item-amount">
						{amount}
					</h4>
					<span
						className="cart-qty-sign"
						onClick={() => toggleAmount(id, "inc")}
					>
						+
					</span>
				</div>
			</div>
			<div className="cart-item-inner-wrap">
				<h4 className="cart-item-desc">${total}</h4>
			</div>
			<div className="cart-item-inner-wrap">
				<button
					className="cart-item-rm-btn"
					onClick={() => removeItem(id)}
				>
					<i className="fas fa-times cart-item-rm-icon"></i>
				</button>
			</div>
		</div>
	);
};

export default CartItem;
