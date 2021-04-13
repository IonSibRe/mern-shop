import React from "react";
import { v4 as uuidv4 } from "uuid";

const InfoSection = () => {
	const data = [
		{
			id: uuidv4(),
			title: "our company",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat nesciunt laborum delectus iste molestiae enim asperiores soluta dicta pariatur.",
		},
		{
			id: uuidv4(),
			title: "our team",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat nesciunt laborum delectus iste molestiae enim asperiores soluta dicta pariatur.",
		},
		{
			id: uuidv4(),
			title: "testimonial",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat nesciunt laborum delectus iste molestiae enim asperiores soluta dicta pariatur.",
		},
	];

	return (
		<section className="info-section-wrap section-center">
			{data.map((item) => {
				const { id, title, desc } = item;

				return (
					<div className="info-section-item" key={id}>
						<h3 className="info-section-title">{title}</h3>
						<p className="info-section-desc">{desc}</p>
					</div>
				);
			})}
		</section>
	);
};

export default InfoSection;
