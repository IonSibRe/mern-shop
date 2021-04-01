import React, { useEffect, useRef, useState } from "react";
import FeaturedProductsRow from "../home/FeaturedProductsRow";
import ShowcaseHeading from "./ShowcaseHeading";
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

const FeaturedProducts = () => {
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
	const [rowCount, setRowCount] = useState(0);

	useEffect(() => {
		setRowCount(slider.current.children.length);
	}, [slider]);

	return (
		<div className="fp">
			<div className="home-showcase-title-wrap">
				<ShowcaseHeading slider={slider} title={"featured products"} />
			</div>
			<div className="fp-showcase-wrap" ref={slider}>
				<FeaturedProductsRow data={data} row={0} rowCount={rowCount} />
				<FeaturedProductsRow data={data} row={1} rowCount={rowCount} />
			</div>
		</div>
	);
};

export default FeaturedProducts;
