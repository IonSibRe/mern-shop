import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import { productImage } from "../sample_data/home_images";

const SingleItem = () => {
	const { id } = useParams();
	const { addToCartSingleItem } = useContext(CartContext);

	const [currentProduct, setCurrentProduct] = useState({});

	const { title, manufacturer, price } = currentProduct;

	const [currentItemAmount, setCurrentItemAmount] = useState(1);
	const [currentItemTotal, setCurrentItemTotal] = useState(0);

	const updateItem = (type) => {
		const newPrice = parseFloat(price);

		if (type === "inc") {
			setCurrentItemAmount(currentItemAmount + 1);
			setCurrentItemTotal(currentItemTotal + newPrice);
		}

		if (type === "dec") {
			if (currentItemAmount > 1) {
				setCurrentItemAmount(currentItemAmount - 1);
				setCurrentItemTotal(currentItemTotal - newPrice);
			} else {
				setCurrentItemAmount(1);
				setCurrentItemTotal(newPrice);
			}
		}

		return;
	};

	useEffect(() => {
		setCurrentItemTotal(currentProduct.price);
	}, [currentProduct]);

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await axios.get(`/api/v1/products/${id}`);
				setCurrentProduct(res.data.data);
			} catch (err) {
				console.log(err.response.data.error);
			}
		};
		getProduct();
	}, [id]);

	return (
		<>
			<Navbar />
			<section className="single-item-wrap section-center">
				<div className="single-item-img-wrap">
					<img
						src={productImage}
						alt={title}
						className="single-item-img"
					/>
				</div>
				<div className="single-item-text-wrap">
					<div className="single-item-inner-text-wrap">
						<h2 className="single-item-title">{title}</h2>
						<h3 className="single-item-manufacturer">
							{manufacturer}
						</h3>
						<h3 className="single-item-price">${price}.00</h3>
						<p className="single-item-desc">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Corporis obcaecati nam sed voluptas tempora
							rem tenetur ipsam, consectetur quam eveniet.
						</p>
						<div className="single-item-cart-control">
							<div className="single-item-qty-wrap">
								<span
									className="single-item-qty-sign"
									onClick={() => updateItem("dec")}
								>
									-
								</span>
								<h4 className="single-item-amount">
									{currentItemAmount}
								</h4>
								<span
									className="single-item-qty-sign"
									onClick={() => updateItem("inc")}
								>
									+
								</span>
							</div>
							<div className="single-item-add-btn-wrap">
								<button
									className="single-item-add-btn"
									onClick={() =>
										addToCartSingleItem(
											id,
											title,
											price,
											productImage,
											currentItemAmount,
											currentItemTotal
										)
									}
								>
									add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Newsletter />
			<Footer />
		</>
	);
};

export default SingleItem;
