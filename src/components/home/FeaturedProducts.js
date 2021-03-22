import React from "react";
import { Link } from "react-router-dom";
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
	];

	return (
		<div className="fp">
			<div className="fp-title-wrap">
				<h2 className="fp-title">Featured Products</h2>
				<div className="fp-row"></div>
				<div className="fp-signs">
					<i className="fas fa-less-than fp-sign"></i>
					<i className="fas fa-greater-than fp-sign"></i>
				</div>
			</div>
			<div className="fp-showcase-wrap">
				{data.map((item) => {
					const { id, img, title, price } = item;

					return (
						<div className="fp-showcase-item" key={id}>
							<div className="fp-showcase-img-wrap">
								<img
									src={img}
									alt="#"
									className="fp-showcase-img"
								/>
							</div>
							<div className="fp-showcase-text-wrap">
								<h4 className="fp-showcase-item-title">
									{title}
								</h4>
								<h4 className="fp-showcase-item-price">
									${price.toFixed(2)}
								</h4>
								<Link
									to="/cart"
									className="fp-showcase-item-link"
								>
									add to cart
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FeaturedProducts;
