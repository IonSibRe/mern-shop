import React, { useContext, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { CheckoutContext } from "../context/CheckoutContext";
import Navbar from "../components/Navbar";
import CheckoutSteps from "../components/checkout/CheckoutSteps";

const Payment = () => {
	const { savePaymentMethod, shippingAddress } = useContext(CheckoutContext);
	const history = useHistory();

	if (!shippingAddress.address) history.push("/shipping");

	const [paymentMethod, setPaymentMethod] = useState("PayPal");
	const localLogin = JSON.parse(localStorage.getItem("login"));

	const submitHandler = (e) => {
		e.preventDefault();

		savePaymentMethod(paymentMethod);
		history.push("/placeorder");
	};

	return (
		<>
			{!localLogin && <Redirect to="/login" />}
			<Navbar />
			<section className="checkout-section-wrap">
				<CheckoutSteps stepOne stepTwo stepThree />
				<form
					className="checkout-form payment-form"
					onSubmit={submitHandler}
				>
					<div className="checkout-title-wrap">
						<h2 className="checkout-title">payment method</h2>
					</div>
					<div className="payment-method-items-wrap">
						<div className="payment-method-item">
							<input
								type="radio"
								name="paymentMethod"
								id="paypal"
								className="payment-method-input"
								value="PayPal"
								required
								checked
								onChange={(e) =>
									setPaymentMethod(e.target.value)
								}
							/>
							<label
								htmlFor="paypal"
								className="payment-method-label"
							>
								PayPal
							</label>
						</div>
						<div className="payment-method-item">
							<input
								type="radio"
								name="paymentMethod"
								id="stripe"
								className="payment-method-input"
								value="PayPal"
								required
								onChange={(e) =>
									setPaymentMethod(e.target.value)
								}
							/>
							<label
								htmlFor="stripe"
								className="payment-method-label"
							>
								Stripe
							</label>
						</div>
					</div>
					<div className="checkout-submit-wrap">
						<button type="submit" className="checkout-submit-btn">
							continue
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Payment;
