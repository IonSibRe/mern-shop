import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { CheckoutContext } from "../context/CheckoutContext";

const PlaceOrder = () => {
	const {
		shippingAddress,
		paymentMethod,
		createOrder,
		resetOrder,
		loading,
		success,
		error,
		order,
	} = useContext(CheckoutContext);
	const history = useHistory();
	const { user } = useContext(AuthContext);
	const { cart } = useContext(CartContext);

	if (!paymentMethod) history.push("/payment");

	// Prices
	cart.itemsPrice = cart.reduce(
		(acc, currentItem) => acc + currentItem.amount * currentItem.price,
		0
	);
	cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 10;
	cart.taxPrice = 0.15 * cart.itemsPrice;
	cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

	const reqItems = {
		orderItems: cart.map((item) => item),
		shippingAddress,
		paymentMethod,
		itemsPrice: cart.itemsPrice,
		shippingPrice: cart.shippingPrice,
		taxPrice: cart.taxPrice,
		totalPrice: cart.totalPrice,
		user_id: user._id,
	};

	const placeOrderHandler = () => {
		createOrder(reqItems);
	};

	useEffect(() => {
		if (success) {
			history.push(`/placeorder/${order._id}`);
			resetOrder();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [history, order, success]);

	return (
		<>
			<Navbar />
			<CheckoutSteps stepOne stepTwo stepThree stepFour />
			<section className="place-order-section section-center">
				<div className="place-order-info-wrap">
					<div className="place-order-card place-order-shipping-card">
						<h2 className="place-order-card-title">shipping</h2>
						<p className="place-order-card-text">
							<strong>Name: </strong> {shippingAddress.fullName}
						</p>
						<p className="place-order-card-text">
							<strong>Address: </strong> {shippingAddress.address}
							, {shippingAddress.city},{" "}
							{shippingAddress.postalCode},{" "}
							{shippingAddress.country},
						</p>
					</div>
					<div className="place-order-card place-order-payment-card">
						<h2 className="place-order-card-title">payment</h2>
						<p className="place-order-card-text">
							<strong>Method: </strong> {paymentMethod}
						</p>
					</div>
					<div className="place-order-card place-order-items-card">
						<h2 className="place-order-card-title">
							ordered items
						</h2>
						{cart.map((item) => {
							const { id, img, title, total } = item;
							return (
								<div className="place-order-cart-item" key={id}>
									<div className="place-order-cart-item-inner-wrap">
										<img
											src={img}
											alt={title}
											className="place-order-cart-item-img"
										/>
									</div>
									<div className="place-order-cart-item-inner-wrap">
										<h4 className="place-order-cart-item-text">
											{title}
										</h4>
									</div>
									<div className="place-order-cart-item-inner-wrap">
										<h4 className="place-order-cart-item-text place-order-cart-item-price-text">
											${total.toFixed(2)}
										</h4>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="place-order-summary-wrap">
					<div className="place-order-card place-order-summary-card">
						<h2 className="place-order-card-title">
							order summary
						</h2>
						<div className="place-order-summary-card-item">
							<h4 className="place-order-summary-text">items</h4>
							<h4 className="place-order-summary-text">
								${cart.itemsPrice.toFixed(2)}
							</h4>
						</div>
						<div className="place-order-summary-card-item">
							<h4 className="place-order-summary-text">
								shipping
							</h4>
							<h4 className="place-order-summary-text">
								${cart.shippingPrice.toFixed(2)}
							</h4>
						</div>
						<div className="place-order-summary-card-item">
							<h4 className="place-order-summary-text">tax</h4>
							<h4 className="place-order-summary-text">
								${cart.taxPrice.toFixed(2)}
							</h4>
						</div>
						<div className="place-order-summary-card-item">
							<h4 className="place-order-summary-text">
								order total
							</h4>
							<h4 className="place-order-summary-text">
								${cart.totalPrice.toFixed(2)}
							</h4>
						</div>
						<button
							className={`place-order-summary-submit-btn ${
								reqItems.orderItems.length === 0 &&
								"btn-disabled"
							}`}
							onClick={placeOrderHandler}
							disabled={reqItems.orderItems.length === 0}
						>
							place order
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default PlaceOrder;
