import React, { useContext, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import Navbar from "../components/Navbar";
import { CheckoutContext } from "../context/CheckoutContext";

const ShippingAddress = () => {
	const { saveShippingAddress, shippingAddress } = useContext(
		CheckoutContext
	);
	const history = useHistory();
	const [fullName, setFullName] = useState(shippingAddress.fullName);
	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
	const [country, setCountry] = useState(shippingAddress.country);
	const localLogin = JSON.parse(localStorage.getItem("login"));

	const submitHandler = (e) => {
		e.preventDefault();
		saveShippingAddress({ fullName, address, city, postalCode, country });
		history.push("/payment");
	};

	return (
		<>
			{!localLogin && <Redirect to="/login" />}
			<Navbar />
			<section className="checkout-section-wrap">
				<CheckoutSteps stepOne stepTwo />
				<form
					action=""
					className="checkout-form"
					onSubmit={submitHandler}
				>
					<div className="checkout-title-wrap">
						<h2 className="checkout-title">shipping address</h2>
					</div>
					<div className="sa-item">
						<label htmlFor="fullName" className="sa-item-label">
							full name
						</label>
						<input
							type="text"
							id="fullName"
							className="sa-item-input"
							placeholder="full name"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							required
						/>
					</div>
					<div className="sa-item">
						<label htmlFor="address" className="sa-item-label">
							address
						</label>
						<input
							type="text"
							id="address"
							className="sa-item-input"
							placeholder="address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							required
						/>
					</div>
					<div className="sa-item">
						<label htmlFor="city" className="sa-item-label">
							city
						</label>
						<input
							type="text"
							id="city"
							className="sa-item-input"
							placeholder="city"
							value={city}
							onChange={(e) => setCity(e.target.value)}
							required
						/>
					</div>
					<div className="sa-item">
						<label htmlFor="postalCode" className="sa-item-label">
							postal code
						</label>
						<input
							type="text"
							id="postalCode"
							className="sa-item-input"
							placeholder="postal code"
							value={postalCode}
							onChange={(e) => setPostalCode(e.target.value)}
							required
						/>
					</div>
					<div className="sa-item">
						<label htmlFor="country" className="sa-item-label">
							country
						</label>
						<input
							type="text"
							id="country"
							className="sa-item-input"
							placeholder="country"
							value={country}
							onChange={(e) => setCountry(e.target.value)}
							required
						/>
					</div>
					<div className="checkout-submit-wrap">
						<button className="checkout-submit-btn" type="submit">
							continue
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default ShippingAddress;
