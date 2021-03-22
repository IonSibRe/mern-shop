import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	home_slider_img_1,
	home_slider_img_2,
	home_slider_img_3,
} from "../../sample_data/home_images";

const showcaseData = [
	{
		id: 1,
		title: "xbox one pro wireless controller",
		desc: "revolution pro controller",
		img: home_slider_img_1,
	},
	{
		id: 2,
		title: "bobovr Z4 virtual reality 3D glasses",
		desc: "virtual reality through a new lens",
		img: home_slider_img_2,
	},
	{
		id: 3,
		title: "portable wireless bluetooth speaker",
		desc: "with colorful LED light",
		img: home_slider_img_3,
	},
];

const MainShowcase = () => {
	const [current, setCurrent] = useState(1);

	useEffect(() => {
		const slideInterval = setInterval(() => {
			current <= showcaseData.length - 1
				? setCurrent(current + 1)
				: setCurrent(1);
		}, 5000);
		return () => clearInterval(slideInterval);
	});

	return (
		<>
			<div className="slider">
				{showcaseData.map((slide) => {
					const { id, img, title, desc } = slide;

					const imgStyling = {
						background: `url(${img}) no-repeat
							center center/cover`,
					};

					return (
						<div
							className={`slide ${
								id === current ? "current" : ""
							}`}
							key={id}
							style={imgStyling}
						>
							<div className="slide-text-wrap">
								<div className="slide-text-inner-wrap">
									<h2 className="slide-title">{title}</h2>
									<p className="slide-desc">{desc}</p>
									<Link to="/products" className="slide-link">
										shop now
									</Link>
								</div>
							</div>
						</div>
					);
				})}
				<div className="dots">
					{showcaseData.map((slide) => {
						return (
							<span
								key={slide.id}
								onClick={() => setCurrent(slide.id)}
								className={`dot ${
									slide.id === current ? "active" : ""
								}`}
							></span>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default MainShowcase;
