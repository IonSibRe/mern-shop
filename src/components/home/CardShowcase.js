import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
	card_showcase_img_1,
	card_showcase_img_2,
	card_showcase_img_3,
} from "../../sample_data/home_images";

const CardShowcase = () => {
	const data = [
		{
			id: uuidv4(),
			title: "Xbox Design Lab",
			desc: "You design it. We Build it",
			bg_img: card_showcase_img_1,
			price: 23.99,
		},
		{
			id: uuidv4(),
			title: "Beats Pill",
			desc: "Small but loud",
			bg_img: card_showcase_img_2,
			price: undefined,
		},
		{
			id: uuidv4(),
			title: "EarBuds",
			desc: "In-ear headphone",
			bg_img: card_showcase_img_3,
			price: undefined,
		},
	];

	return (
		<div className="cs-wrap section-center">
			{data.map((item, index) => {
				const { id, title, desc, bg_img, price = undefined } = item;

				const bgImage = {
					background: `url(${bg_img}) no-repeat center center/cover`,
				};

				return (
					<div
						className={`cs-card ${
							index === 0 ? "cs-card-lg" : "cs-card-sm"
						}`}
						style={bgImage}
						key={id}
					>
						<Link to="/products" className="cs-card-link"></Link>
						<div
							className={`cs-card-text-wrap ${
								index === 0
									? "cs-card-text-wrap-lg"
									: "cs-card-text-wrap-sm"
							}`}
						>
							<h2
								className={`cs-title ${
									index === 0 ? "cs-title-lg" : "cs-title-sm"
								}`}
							>
								{title}
							</h2>
							<h4
								className={`cs-desc ${
									index === 0 ? "cs-card-lg" : "cs-card-sm"
								}`}
							>
								{desc}
							</h4>
							{price && <h4 className="cs-price">${price}</h4>}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CardShowcase;
