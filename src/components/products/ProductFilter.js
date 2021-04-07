import React from "react";
import { v4 as uuidv4 } from "uuid";

const ProductFilter = ({ data }) => {
	const categories = ["all", ...new Set(data.map((item) => item.category))];
	const manufacturers = [...new Set(data.map((item) => item.manufacturer))];

	return (
		<section className="filter-wrap">
			<div className="filter-title-wrap filter-item-wrap">
				<h2 className="filter-title">filter by</h2>
			</div>

			<div className="filter-sort-wrap filter-item-wrap">
				<h3 className="filter-sort-title filter-subtitle">Sort</h3>
				<select name="sort" className="filter-sort-select">
					<option value="new">new</option>
					<option value="price-low">price: low to high</option>
					<option value="price-high">price: high to low</option>
				</select>
			</div>

			<div className="filter-price-wrap filter-item-wrap">
				<h3 className="filter-price-title filter-subtitle">Price</h3>
				<div className="filter-price-item-wrap">
					<h4 className="filter-price-text">$0 - $100</h4>
					<input
						type="range"
						min="1"
						max="100"
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
								id="filter-manufacturer-input-id"
							/>
							<label
								className="filter-manufacturer-text filter-text"
								htmlFor="filter-manufacturer-input-id"
							>
								{manufacturer}
							</label>
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
								id="filter-category-input-id"
							/>
							<label
								className="filter-category-text filter-text"
								htmlFor="filter-category-input-id"
							>
								{category}
							</label>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProductFilter;
