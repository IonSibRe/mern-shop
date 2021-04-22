import React from "react";
import { v4 as uuidv4 } from "uuid";

const links = [
	{ id: uuidv4(), category: "accountInfo", text: "account info" },
	{ id: uuidv4(), category: "security", text: "security" },
	{ id: uuidv4(), category: "orderHistory", text: "order history" },
];

const ProfileFilter = () => {
	return (
		<section className="profile-filter-section">
			<div className="profile-filter-title-wrap">
				<h2 className="profile-filter-title">account management</h2>
			</div>
			<div className="profile-filter-links-wrap">
				{links.map((link) => {
					const { id, text } = link;

					return (
						<div className="profile-filter-link" key={id}>
							<h4 className="profile-filter-link-text">{text}</h4>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProfileFilter;
