import React, { useState, useRef } from "react";
import FeaturedProductsRow from "../home/FeaturedProductsRow";
import { v4 as uuidv4 } from "uuid";
import {
	featured_products_img_1,
	featured_products_img_2,
	featured_products_img_3,
	featured_products_img_4,
	featured_products_img_5,
	featured_products_img_6,
	featured_products_img_7,
	featured_products_img_8,
} from "../../sample_data/home_images";

const FeaturedProducts = () => {
	const data = [
		{
			id: uuidv4(),
			img: featured_products_img_1,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_2,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_3,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_4,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_5,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_6,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_7,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_8,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_5,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_6,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_7,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_8,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_5,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_6,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_7,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: featured_products_img_8,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
	];

	/* TODO:
		- Fix Scroll Buttons
	*/

	const [prevDisabled, setPrevDisable] = useState(true);
	const [nextDisabled, setNextDisable] = useState(false);
	const slider = useRef(null);

	const checkButtons = () => {
		const isPrevDisabled = slider.current.scrollLeft <= 0;
		const isNextDisabled =
			slider.current.scrollLeft + slider.current.offsetWidth >=
			slider.current.scrollWidth;

		setPrevDisable(isPrevDisabled);
		setNextDisable(isNextDisabled);
	};

	return (
		<div className="fp">
			<div className="fp-title-wrap">
				<h2 className="fp-title">Featured Products</h2>
				<div className="fp-row"></div>
				<div className="fp-btns">
					<button
						className={`fp-btn prev-btn ${
							prevDisabled && "disabled"
						}`}
						disabled={prevDisabled}
						onClick={() => {
							slider.current.scrollLeft -=
								slider.current.offsetWidth / 2;
							checkButtons();
						}}
					>
						<i className="fas fa-less-than fp-sign"></i>
					</button>
					<button
						className={`fp-btn next-btn ${
							nextDisabled && "disabled"
						}`}
						disabled={nextDisabled}
						onClick={() => {
							slider.current.scrollLeft +=
								slider.current.offsetWidth / 2;
							checkButtons();
						}}
					>
						<i className="fas fa-greater-than fp-sign"></i>
					</button>
				</div>
			</div>
			<div className="fp-showcase-wrap" ref={slider}>
				<FeaturedProductsRow data={data} row={0} />
				<FeaturedProductsRow data={data} row={1} />
			</div>
		</div>
	);
};

export default FeaturedProducts;
