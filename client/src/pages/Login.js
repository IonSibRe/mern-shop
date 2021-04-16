import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<section className="auth-wrap section-center">
			<div className="auth-card">
				<h1 className="auth-title">login</h1>
				<div className="auth-card-inner-wrap">
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
							Don't have an account?{" "}
						</p>
						<Link to="/register" className="auth-switch-link">
							Register
						</Link>
					</div>
					<button className="auth-btn">login</button>
				</div>
			</div>
		</section>
	);
};

export default Login;
