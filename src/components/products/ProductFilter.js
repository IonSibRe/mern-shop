import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProductsContext } from "../../context/ProductsContext";

const ProductFilter = () => {
	const {
		allProducts,
		currentMinPrice,
		currentMaxPrice,
		sortDefault,
		sortPrice,
		sortManufacturer,
		manufacturersChecked,
	} = useContext(ProductsContext);

	const categories = [
		"all",
		...new Set(allProducts.map((item) => item.category)),
	];
	const manufacturers = [
		...new Set(allProducts.map((item) => item.manufacturer)),
	];

	const [currentMaxPriceUI, setCurrentMaxPriceUI] = useState(currentMaxPrice);

	useEffect(() => {
		setCurrentMaxPriceUI(currentMaxPrice);
	}, [currentMaxPrice]);

	return (
		<section className="filter-wrap">
			<div className="filter-title-wrap filter-item-wrap">
				<h2 className="filter-title">filter by</h2>
			</div>

			<div className="filter-sort-wrap filter-item-wrap">
				<h3 className="filter-sort-title filter-subtitle">Sort</h3>
				<select
					name="sort"
					className="filter-sort-select"
					onChange={(e) => sortDefault(e.target.value)}
				>
					<option value="new">new</option>
					<option value="price-low">price: low to high</option>
					<option value="price-high">price: high to low</option>
				</select>
			</div>

			<div className="filter-price-wrap filter-item-wrap">
				<h3 className="filter-price-title filter-subtitle">Price</h3>
				<div className="filter-price-item-wrap">
					<h4 className="filter-price-text">
						${currentMinPrice} - ${currentMaxPriceUI}
					</h4>
					<input
						type="range"
						min={currentMinPrice}
						max={currentMaxPrice}
						defaultValue={currentMaxPrice}
						onChange={(e) => {
							sortPrice(e.target.value);
							setCurrentMaxPriceUI(e.target.value);
						}}
						className="filter-price-input"
						id="filter-price-input-id"
					/>
				</div>
			</div>

			<div className="filter-manufacturer-wrap filter-item-wrap">
				<h3 className="filter-manufacturer-title filter-subtitle">
					Manufacturer
				</h3>
				{manufacturers.map((manufacturer) => {
					return (
						<div
							className="filter-manufacturer-item-wrap filter-item-input-wrap"
							key={uuidv4()}
						>
							<input
								type="checkbox"
								className="filter-manufacturer-input filter-input"
								checked={
									manufacturersChecked.indexOf(
										manufacturer
									) === -1
										? false
										: true
								}
								onChange={() => {
									sortManufacturer(manufacturer);
								}}
							/>
							<span className="filter-manufacturer-text filter-text">
								{manufacturer}
							</span>
						</div>
					);
				})}
			</div>

			<div className="filter-category-wrap filter-item-wrap">
				<h3 className="filter-manufacturer-title filter-subtitle">
					Category
				</h3>
				{categories.map((category) => {
					return (
						<div
							className="filter-category-item-wrap filter-item-input-wrap"
							key={uuidv4()}
						>
							<input
								type="checkbox"
								className="filter-category-input filter-input"
							/>
							<span className="filter-category-text filter-text">
								{category}
							</span>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProductFilter;
