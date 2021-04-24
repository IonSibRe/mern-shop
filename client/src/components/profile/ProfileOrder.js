import React from "react";
import { Link } from "react-router-dom";

const ProfileOrder = () => {
	return (
		<section className="profile-order-section">
			<div className="profile-order-title-wrap">
				<h2 className="profile-order-title">order history</h2>
			</div>
			<div className="profile-order-form-wrap">
				<div className="profile-order-form-headers-wrap">
					<h3 className="profile-order-form-headers-text">ID</h3>
					<h3 className="profile-order-form-headers-text">date</h3>
					<h3 className="profile-order-form-headers-text">
						sub total
					</h3>
					<h3 className="profile-order-form-headers-text">
						discount
					</h3>
					<h3 className="profile-order-form-headers-text">tax</h3>
					<h3 className="profile-order-form-headers-text">
						shipping
					</h3>
					<h3 className="profile-order-form-headers-text">total</h3>
					<h3 className="profile-order-form-headers-text">receipt</h3>
				</div>
				<div className="profile-order-form-items-wrap">
					<div className="profile-order-form-item">
						<h4 className="profile-order-form-item-text">
							3478924
						</h4>
						<h4 className="profile-order-form-item-text">
							02/05/2021
						</h4>
						<h4 className="profile-order-form-item-text">
							$999.99
						</h4>
						<h4 className="profile-order-form-item-text">$0.00</h4>
						<h4 className="profile-order-form-item-text">$99.99</h4>
						<h4 className="profile-order-form-item-text">$11.99</h4>
						<h4 className="profile-order-form-item-text">
							$1111.97
						</h4>
						<Link
							className="profile-order-form-item-text profile-order-form-item-link"
							to="/"
						>
							view
						</Link>
					</div>
					<div className="profile-order-form-item">
						<h4 className="profile-order-form-item-text">
							3478924
						</h4>
						<h4 className="profile-order-form-item-text">
							02/05/2021
						</h4>
						<h4 className="profile-order-form-item-text">
							$999.99
						</h4>
						<h4 className="profile-order-form-item-text">$0.00</h4>
						<h4 className="profile-order-form-item-text">$99.99</h4>
						<h4 className="profile-order-form-item-text">$11.99</h4>
						<h4 className="profile-order-form-item-text">
							$1111.97
						</h4>
						<Link
							className="profile-order-form-item-text profile-order-form-item-link"
							to="/"
						>
							view
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfileOrder;
