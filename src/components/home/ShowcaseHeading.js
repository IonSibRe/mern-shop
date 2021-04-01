import React, { useState } from "react";

const ShowcaseHeading = ({ slider, columnsInGrid, title }) => {
	let [scrolledAmount, setScrolledAmount] = useState(0);
	const [prevDisabled, setPrevDisable] = useState(true);
	const [nextDisabled, setNextDisable] = useState(false);

	const scrollNext = (slider, columnsInGrid) => {
		slider.current.scrollLeft += slider.current.offsetWidth / columnsInGrid;
		setScrolledAmount(
			(scrolledAmount += slider.current.offsetWidth / columnsInGrid)
		);
	};

	const scrollPrev = (slider, columnsInGrid) => {
		slider.current.scrollLeft -= slider.current.offsetWidth / columnsInGrid;
		setScrolledAmount(
			(scrolledAmount -= slider.current.offsetWidth / columnsInGrid)
		);
	};

	const checkButtons = () => {
		const isPrevDisabled = scrolledAmount <= 0;
		const isNextDisabled =
			scrolledAmount + slider.current.offsetWidth >=
			slider.current.scrollWidth;

		setPrevDisable(isPrevDisabled);
		setNextDisable(isNextDisabled);
	};

	return (
		<>
			<h2 className="home-showcase-title">{title}</h2>
			<div className="home-showcase-row"></div>
			<div className="home-showcase-btns">
				<button
					className={`home-showcase-btn prev-btn ${
						prevDisabled && "btn-disabled"
					}`}
					disabled={prevDisabled}
					onClick={() => {
						scrollPrev(slider, columnsInGrid);
						checkButtons();
					}}
				>
					<i className="fas fa-less-than fp-sign"></i>
				</button>
				<button
					className={`home-showcase-btn next-btn ${
						nextDisabled && "btn-disabled"
					}`}
					disabled={nextDisabled}
					onClick={() => {
						scrollNext(slider, columnsInGrid);
						checkButtons();
					}}
				>
					<i className="fas fa-greater-than fp-sign"></i>
				</button>
			</div>
		</>
	);
};

export default ShowcaseHeading;
