import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
	const { loggedIn, error, register, resetError } = useContext(AuthContext);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const errorInterval = setTimeout(() => resetError(), 3000);
		return () => clearTimeout(errorInterval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);

	return (
		<>
			{loggedIn ? (
				<Redirect to="/" />
			) : (
				<section className="auth-wrap section-center">
					{error && (
						<div className="alert-wrap">
							<h2 className="alert-text">{error}</h2>
						</div>
					)}
					<div className="auth-card">
						<h1 className="auth-title">register</h1>
						<div className="auth-card-inner-wrap">
							<input
								type="text"
								placeholder="Username"
								className="auth-input auth-username-input"
								onChange={(e) => setUsername(e.target.value)}
							/>
							<input
								type="email"
								placeholder="Email"
								className="auth-input auth-email-input"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								type="password"
								placeholder="Password"
								className="auth-input auth-password-input"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div className="auth-switch-wrap">
								<p className="auth-switch-text">
									Already have an account?{" "}
								</p>
								<Link to="/login" className="auth-switch-link">
									Log in
								</Link>
							</div>
							<button
								className="auth-btn"
								onClick={() =>
									register(username, email, password)
								}
							>
								register
							</button>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Register;
