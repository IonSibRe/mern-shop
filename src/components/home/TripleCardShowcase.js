import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
	triple_card_showcase_img_1,
	triple_card_showcase_img_2,
	triple_card_showcase_img_3,
} from "../../sample_data/home_images";

const TripleCardShowcase = () => {
	const data = [
		{
			id: uuidv4(),
			bg_img: triple_card_showcase_img_1,
		},

		{
			id: uuidv4(),
			bg_img: triple_card_showcase_img_2,
		},

		{
			id: uuidv4(),
			bg_img: triple_card_showcase_img_3,
		},
	];

	return (
		<section className="tc-wrap section-center">
			{data.map((item) => {
				const { id, bg_img } = item;

				const bgImage = {
					background: `url(${bg_img}) no-repeat center center/cover`,
				};

				return (
					<div style={bgImage} key={id} className="tc-card">
						<Link to="/products" className="tc-link"></Link>
					</div>
				);
			})}
		</section>
	);
};

export default TripleCardShowcase;
