import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const ProfileSecurity = () => {
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [updatedSuccessfully, setUpdatedSuccessfully] = useState(false);
	const [error, setError] = useState({ error: false, msg: "" });
	const localLogin = JSON.parse(localStorage.getItem("login"));

	const url = "http://localhost:5000/api/v1/user";

	const changePassword = async () => {
		if (!password || !passwordConfirm) {
			setError({ error: true, msg: "please fill in both fields" });
			return;
		}

		if (password !== passwordConfirm) {
			setError({ error: true, msg: "passwords must match" });
			return;
		}

		try {
			const res = await fetch(`${url}/${localLogin._id}/password`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					"auth-token": localLogin.token,
				},
				body: JSON.stringify({
					password,
				}),
			});

			const data = await res.json();

			if (data.success) setUpdatedSuccessfully(true);

			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const updatedSuccessfullyTimeout = setTimeout(
			() => setUpdatedSuccessfully(false),
			3000
		);
		const errorTimeout = setTimeout(
			() => setError({ error: false, msg: "" }),
			3000
		);
		return () => {
			clearTimeout(updatedSuccessfullyTimeout);
			clearTimeout(errorTimeout);
		};
	}, [updatedSuccessfully, error]);

	return (
		<>
			{!localLogin && <Redirect to="/" />}
			<section className="profile-personal-info-section">
				<div className="profile-personal-info-title-wrap">
					<h2 className="profile-personal-info-title">security</h2>
				</div>
				{updatedSuccessfully && (
					<div className="profile-personal-info-updated-wrap profile-personal-info-alert-wrap">
						<h3 className="profile-personal-info-updated-text profile-personal-info-alert-text">
							password changed successfully
						</h3>
					</div>
				)}
				{error.error && (
					<div className="profile-personal-info-error-wrap profile-personal-info-alert-wrap">
						<h3 className="profile-personal-info-error-text profile-personal-info-alert-text">
							{error.msg}
						</h3>
					</div>
				)}
				<div className="profile-personal-info-items-wrap profile-security-items-wrap">
					<div className="profile-security-items-wrap-title-wrap">
						<h3 className="profile-security-items-wrap-title">
							change password
						</h3>
					</div>
					<div className="profile-personal-info-item">
						<div className="profile-personal-info-text-wrap">
							<h3 className="profile-personal-info-text">
								password
							</h3>
						</div>
						<div className="profile-personal-info-input-wrap">
							<input
								type="password"
								className="profile-personal-info-input"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="profile-personal-info-item">
						<div className="profile-personal-info-text-wrap">
							<h3 className="profile-personal-info-text">
								password confirm
							</h3>
						</div>
						<div className="profile-personal-info-input-wrap">
							<input
								type="password"
								className="profile-personal-info-input"
								onChange={(e) =>
									setPasswordConfirm(e.target.value)
								}
							/>
						</div>
					</div>
				</div>
				<div className="profile-personal-info-submit-wrap">
					<button
						className="profile-personal-info-submit-btn"
						onClick={changePassword}
					>
						continue
					</button>
				</div>
			</section>
		</>
	);
};

export default ProfileSecurity;
