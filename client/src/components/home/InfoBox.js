import React from "react";
import { v4 as uuidv4 } from "uuid";

const data = [
	{
		id: uuidv4(),
		title: "free shipping",
		desc: "on all orders over $75.00",
		icon: "fas fa-shipping-fast",
	},
	{
		id: uuidv4(),
		title: "free returns",
		desc: "returns are free within 9 days",
		icon: "fas fa-globe",
	},
	{
		id: uuidv4(),
		title: "100% payment secure",
		desc: "your payments are safe with us",
		icon: "fas fa-credit-card",
	},
	{
		id: uuidv4(),
		title: "support 24/7",
		desc: "contact us 24 hours a day",
		icon: "fas fa-phone-alt",
	},
];

const InfoBox = () => {
	return (
		<section className="info-box section-center">
			{data.map((box) => {
				const { id, title, desc, icon } = box;

				return (
					<div className="info-single-box" key={id}>
						<div className="info-single-inner-box">
							<i className={`${icon} info-icon`}></i>
							<h3 className="info-title">{title}</h3>
							<p className="info-desc">{desc}</p>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default InfoBox;
