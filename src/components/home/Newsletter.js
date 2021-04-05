import React from "react";

const Newsletter = () => {
	return (
		<div className="nl-main-wrap">
			<div className="nl-inner-wrap section-center">
				<div className="nl-text-wrap">
					<h2 className="nl-title">Sign Up For Newsletters</h2>
					<h4 className="nl-desc">
						Be the First to Know. Sign up for newsletter today.
					</h4>
				</div>
				<div className="nl-form-wrap">
					<form className="nl-form">
						<input
							type="email"
							name="email"
							className="nl-input"
							placeholder="Enter your email here..."
						/>
						<button type="submit" className="nl-submit-btn">
							sign up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
