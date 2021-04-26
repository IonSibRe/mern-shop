import React from "react";

const CheckoutSteps = ({ stepOne, stepTwo, stepThree, stepFour }) => {
	return (
		<div className="checkout-steps-wrap">
			<div className={`checkout-steps-item ${stepOne && "active"}`}>
				<h3 className="checkout-steps-text">sign-in</h3>
			</div>
			<div className={`checkout-steps-item ${stepTwo && "active"}`}>
				<h3 className="checkout-steps-text">shipping</h3>
			</div>
			<div className={`checkout-steps-item ${stepThree && "active"}`}>
				<h3 className="checkout-steps-text">payment</h3>
			</div>
			<div className={`checkout-steps-item ${stepFour && "active"}`}>
				<h3 className="checkout-steps-text">place order</h3>
			</div>
		</div>
	);
};

export default CheckoutSteps;
