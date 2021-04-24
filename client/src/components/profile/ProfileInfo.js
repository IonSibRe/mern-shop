import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const items = [
	{ id: uuidv4(), category: "first_name", title: "first name" },
	{ id: uuidv4(), category: "last_name", title: "last name" },
	{ id: uuidv4(), category: "email", title: "email" },
	{ id: uuidv4(), category: "mobile_phone", title: "mobile phone" },
	{ id: uuidv4(), category: "date_of_birth", title: "date of birth" },
	{ id: uuidv4(), category: "company", title: "company" },
];

const ProfileInfo = () => {
	const [personalData, setPersonalData] = useState({});
	const [updatedSuccessfully, setUpdatedSuccessfully] = useState(false);
	const [error, setError] = useState({ error: false, msg: "" });
	const localLogin = JSON.parse(localStorage.getItem("login"));

	const url = "http://localhost:5000/api/v1/user";

	const updateUser = async () => {
		if (Object.keys(personalData).length === 0) {
			setError({ error: true, msg: "please fill in at least one field" });
			return;
		}

		try {
			const res = await fetch(`${url}/${localLogin._id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					"auth-token": localLogin.token,
				},
				body: JSON.stringify({
					personalData,
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
			{!localLogin && <Redirect to="/login" />}
			<section className="profile-personal-info-section">
				<div className="profile-personal-info-title-wrap">
					<h2 className="profile-personal-info-title">
						account information
					</h2>
				</div>
				{updatedSuccessfully && (
					<div className="profile-personal-info-updated-wrap profile-personal-info-alert-wrap">
						<h3 className="profile-personal-info-updated-text profile-personal-info-alert-text">
							account updated successfully
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
				<div className="profile-personal-info-items-wrap">
					{items.map((item) => {
						const { id, category, title } = item;
						return (
							<div
								className="profile-personal-info-item"
								key={id}
							>
								<div className="profile-personal-info-text-wrap">
									<h3 className="profile-personal-info-text">
										{title}:
									</h3>
								</div>
								<div className="profile-personal-info-input-wrap">
									<input
										type="text"
										className="profile-personal-info-input"
										onChange={(e) =>
											setPersonalData({
												...personalData,
												[category]: e.target.value,
											})
										}
									/>
								</div>
							</div>
						);
					})}
				</div>
				<div className="profile-personal-info-submit-wrap">
					<button
						className="profile-personal-info-submit-btn"
						onClick={updateUser}
					>
						continue
					</button>
				</div>
			</section>
		</>
	);
};

export default ProfileInfo;
