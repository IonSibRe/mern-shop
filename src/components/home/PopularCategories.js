import React, { useRef } from "react";
import ShowcaseHeading from "./ShowcaseHeading";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
	home_pc_img_1,
	home_pc_img_2,
	home_pc_img_3,
	home_pc_img_4,
} from "../../sample_data/home_images";

const PopularCategories = () => {
	const data = [
		{
			id: uuidv4(),
			img: home_pc_img_1,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_pc_img_2,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_pc_img_3,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_pc_img_4,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_pc_img_1,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_pc_img_2,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_pc_img_3,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_pc_img_4,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
	];

	const slider = useRef(null);
	const columnsInGrid = 4;

	return (
		<div className="pc-wrap">
			<div className="home-showcase-title-wrap">
				<ShowcaseHeading
					slider={slider}
					columnsInGrid={columnsInGrid}
					title={"popular categories"}
				/>
			</div>
			<div className="pc-showcase-wrap" ref={slider}>
				<div className="pc-showcase-inner-wrap home-showcase-inner-wrap">
					{data.map((item) => {
						return (
							<PopularCategoriesItem item={item} key={item.id} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

const PopularCategoriesItem = ({ item }) => {
	const { id, img, title } = item;

	return (
		<div className="pc-showcase-item" key={id}>
			<div className="pc-showcase-img-wrap">
				<img src={img} alt="#" className="pc-showcase-img" />
			</div>
			<div className="pc-showcase-text-wrap">
				<h4 className="pc-showcase-item-title">{title}</h4>
				<div className="pc-categories-wrap">
					<Link to="/products" className="pc-category-link">
						Lorem, ipsum dolor.
					</Link>
					<Link to="/products" className="pc-category-link">
						Lorem, ipsum dolor.
					</Link>
					<Link to="/products" className="pc-category-link">
						Lorem, ipsum dolor.
					</Link>
					<Link to="/products" className="pc-category-link">
						Lorem, ipsum dolor.
					</Link>
					<Link to="/products" className="pc-category-link">
						Lorem, ipsum dolor.
					</Link>
				</div>
				<Link to="/cart" className="pc-showcase-view-link">
					view all
				</Link>
			</div>
		</div>
	);
};

export default PopularCategories;
