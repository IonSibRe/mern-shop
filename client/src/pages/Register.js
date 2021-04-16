import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<section className="auth-wrap section-center">
			<div className="auth-card">
				<h1 className="auth-title">register</h1>
				<div className="auth-card-inner-wrap">
					<input
						type="text"
						placeholder="Username"
						className="auth-input auth-username-input"
					/>
					<input
						type="email"
						placeholder="Email"
						className="auth-input auth-email-input"
					/>
					<input
						type="password"
						placeholder="Password"
						className="auth-input auth-password-input"
					/>
					<div className="auth-switch-wrap">
						<p className="auth-switch-text">
							Already have an account?{" "}
						</p>
						<Link to="/login" className="auth-switch-link">
							Log in
						</Link>
					</div>
					<button className="auth-btn">register</button>
				</div>
			</div>
		</section>
	);
};

export default Register;
