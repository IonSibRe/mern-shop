import React, { useEffect, useState, useRef } from "react";
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
	const activeSlide = useRef(null);

	console.log(showcaseData.length);

	const nextSlide = () => {
		current <= showcaseData.length - 1
			? setCurrent(current + 1)
			: setCurrent(1);
	};

	useEffect(() => {
		const slideInterval = setInterval(() => {
			nextSlide();
		}, 5000);
		return () => clearInterval(slideInterval);
	});

	return (
		<>
			<div className="slider">
				{showcaseData.map((slide) => {
					const { id, img, title, desc } = slide;
					return (
						<div
							className={`slide ${
								id === current ? "current" : ""
							}`}
							ref={id === current ? activeSlide : null}
							key={id}
						>
							<div className="content">
								<div className="slide-text-wrap">
									<h2 className="slide-h2">{title}</h2>
									<p className="slide-p">{desc}</p>
								</div>
							</div>
							<div className="slide-img-wrap">
								<img src={img} alt="#" className="slide-img" />
							</div>
						</div>
					);
				})}
				<div className="dots">
					{showcaseData.map((slide) => {
						const { id } = slide;
						return (
							<span
								key={id}
								className={`dot ${
									id === current ? "active" : ""
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
