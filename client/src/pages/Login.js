import React, { useContext, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
	const { login, error, loggedIn, resetError } = useContext(AuthContext);
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
				<>
					<Navbar />
					<section className="auth-wrap section-center">
						{error && (
							<div className="alert-wrap">
								<h2 className="alert-text">{error}</h2>
							</div>
						)}
						<div className="auth-card">
							<h1 className="auth-title">login</h1>
							<div className="auth-card-inner-wrap">
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
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<div className="auth-switch-wrap">
									<p className="auth-switch-text">
										Don't have an account?{" "}
									</p>
									<Link
										to="/register"
										className="auth-switch-link"
									>
										Register
									</Link>
								</div>
								<button
									className="auth-btn"
									onClick={() => login(email, password)}
								>
									login
								</button>
							</div>
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default Login;
