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
	const [error, setError] = useState({ error: false, msg: "error" });
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
			<section className="profile-section profile-personal-info-section">
				<div className="profile-title-wrap">
					<h2 className="profile-title">account information</h2>
				</div>
				{updatedSuccessfully && (
					<div className="profile-updated-wrap profile-alert-wrap">
						<h3 className="profile-updated-text profile-alert-text">
							account updated successfully
						</h3>
					</div>
				)}
				{error.error && (
					<div className="profile-error-wrap profile-alert-wrap">
						<h3 className="profile-error-text profile-alert-text">
							{error.msg}
						</h3>
					</div>
				)}
				<div className="profile-items-wrap">
					{items.map((item) => {
						const { id, category, title } = item;
						return (
							<div className="profile-item" key={id}>
								<div className="profile-item-text-wrap">
									<h3 className="profile-item-text">
										{title}:
									</h3>
								</div>
								<div className="profile-item-input-wrap">
									<input
										type="text"
										className="profile-item-input"
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
				<div className="profile-submit-wrap">
					<button className="profile-submit-btn" onClick={updateUser}>
						continue
					</button>
				</div>
			</section>
		</>
	);
};

export default ProfileInfo;
