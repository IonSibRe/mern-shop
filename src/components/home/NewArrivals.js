import React, { useRef } from "react";
import ShowcaseHeading from "./ShowcaseHeading";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
	home_showcase_img_1,
	home_showcase_img_2,
	home_showcase_img_3,
	home_showcase_img_4,
	home_showcase_img_5,
	home_showcase_img_6,
	home_showcase_img_7,
	home_showcase_img_8,
} from "../../sample_data/home_images";

const NewArrivals = () => {
	const data = [
		{
			id: uuidv4(),
			img: home_showcase_img_1,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_2,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_3,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_4,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_5,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_6,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_7,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_8,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
	];
	const slider = useRef(null);
	const columnsInGrid = 5;

	return (
		<div className="na-wrap section-center">
			<div className="home-showcase-title-wrap">
				<ShowcaseHeading
					slider={slider}
					columnsInGrid={columnsInGrid}
					title={"new arrivals"}
				/>
			</div>
			<div className="na-showcase-wrap" ref={slider}>
				<div className="na-showcase-inner-wrap home-showcase-inner-wrap">
					{data.map((item) => {
						return <NewArrivalsItem item={item} key={item.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

const NewArrivalsItem = ({ item }) => {
	const { id, img, title, price } = item;

	return (
		<div className="na-showcase-item" key={id}>
			<div className="na-showcase-img-wrap">
				<img src={img} alt="#" className="na-showcase-img" />
			</div>
			<div className="na-showcase-text-wrap">
				<h4 className="na-showcase-item-title">{title}</h4>
				<h4 className="na-showcase-item-price">${price.toFixed(2)}</h4>
				<Link to="/cart" className="na-showcase-item-link">
					add to cart
				</Link>
			</div>
		</div>
	);
};

export default NewArrivals;
