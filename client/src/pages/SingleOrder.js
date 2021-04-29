import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CheckoutContext } from "../context/CheckoutContext";
import { PayPalButton } from "react-paypal-button-v2";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import AlertBox from "../components/AlertBox";

const SingleOrder = () => {
	const { id } = useParams();
	const [sdkReady, setSdkReady] = useState(false);
	const {
		order,
		getOrderDetails,
		payOrder,
		resetOrderPay,
		successPay,
		loading,
		error,
		errorPay,
	} = useContext(CheckoutContext);
	const url = "http://localhost:5000/api/v1/config/paypal";

	useEffect(() => {
		const addPayPalScript = async () => {
			const res = await fetch(url);
			const data = await res.json();
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.src = `https://www.paypal.com/sdk/js?client-id=${data.clientID}`;
			script.async = true;
			script.onload = () => {
				setSdkReady(true);
			};
			document.body.appendChild(script);
		};
		if (!order || !order._id || successPay) {
			resetOrderPay();
			getOrderDetails(id);
		} else {
			if (!order.isPaid) {
				if (!window.paypal) {
					addPayPalScript();
				} else {
					setSdkReady(true);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, order, successPay]);

	const successPaymentHandler = (paymentResult) => {
		payOrder(order, paymentResult);
	};

	if (loading) return <Loader />;

	if (error) return <AlertBox />;

	return (
		<>
			<Navbar />
			<section className="place-order-section section-center">
				<div className="place-order-info-wrap">
					<div className="place-order-card place-order-shipping-card">
						<h2 className="place-order-card-title">shipping</h2>
						<p className="place-order-card-text">
							<strong>Order ID: </strong>
							{order._id}
						</p>
						<p className="place-order-card-text">
							<strong>Name: </strong>{" "}
							{order.shippingAddress.fullName}
						</p>
						<p className="place-order-card-text">
							<strong>Address: </strong>{" "}
							{order.shippingAddress.address},{" "}
							{order.shippingAddress.city},{" "}
							{order.shippingAddress.postalCode},{" "}
							{order.shippingAddress.country},
						</p>
						<AlertBox
							success={order.isDelivered}
							msg={
								order.isDelivered
									? order.deliveredAt
									: "not delivered"
							}
						/>
					</div>
					<div className="place-order-card place-order-payment-card">
						<h2 className="place-order-card-title">payment</h2>
						<p className="place-order-card-text">
							<strong>Method: </strong> {order.paymentMethod}
						</p>
						<AlertBox
							success={order.isPaid}
							msg={
								order.isPaid
									? `paid at: ${order.paidAt}`
									: "not paid"
							}
						/>
					</div>
					<div className="place-order-card place-order-items-card">
						<h2 className="place-order-card-title">
							ordered items
						</h2>
						{order.orderItems.map((item) => {
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
								${order.itemsPrice.toFixed(2)}
							</h4>
						</div>
						<div className="place-order-summary-card-item">
							<h4 className="place-order-summary-text">
								shipping
							</h4>
							<h4 className="place-order-summary-text">
								${order.shippingPrice.toFixed(2)}
							</h4>
						</div>
						<div className="place-order-summary-card-item">
							<h4 className="place-order-summary-text">tax</h4>
							<h4 className="place-order-summary-text">
								${order.taxPrice.toFixed(2)}
							</h4>
						</div>
						<div className="place-order-summary-card-item">
							<h4 className="place-order-summary-text">
								order total
							</h4>
							<h4 className="place-order-summary-text">
								${order.totalPrice.toFixed(2)}
							</h4>
						</div>
						{!order.isPaid && (
							<div id="paypal-btn-wrap">
								{!sdkReady ? (
									<h2>Loading</h2>
								) : (
									<>
										{errorPay && (
											<AlertBox
												success={false}
												msg={errorPay}
											/>
										)}
										<PayPalButton
											amount={order.totalPrice}
											onSuccess={successPaymentHandler}
										/>
									</>
								)}
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default SingleOrder;
