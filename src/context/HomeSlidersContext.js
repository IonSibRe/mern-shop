import React, { useState } from "react";

const HomeSlidersContext = React.createContext();

const HomeSlidersProvider = ({ children }) => {
	const [prevDisabled, setPrevDisable] = useState(true);
	const [nextDisabled, setNextDisable] = useState(false);
	let [scrolledAmount, setScrolledAmount] = useState(0);

	// Scrolling
	const scrollNext = (slider, columnsInGrid) => {
		slider.current.scrollLeft += slider.current.offsetWidth / columnsInGrid;
		setScrolledAmount(
			(scrolledAmount += slider.current.offsetWidth / columnsInGrid)
		);
		checkButtons(slider);
	};

	const scrollPrev = (slider, columnsInGrid) => {
		slider.current.scrollLeft -= slider.current.offsetWidth / columnsInGrid;
		setScrolledAmount(
			(scrolledAmount -= slider.current.offsetWidth / columnsInGrid)
		);
		checkButtons(slider);
	};

	const checkButtons = (slider) => {
		const isPrevDisabled = scrolledAmount <= 0;
		const isNextDisabled =
			scrolledAmount + slider.current.offsetWidth >=
			slider.current.scrollWidth;

		setPrevDisable(isPrevDisabled);
		setNextDisable(isNextDisabled);
	};

	// Data
	const filterRow = (data, row) => {
		const maxOnRow = Math.ceil(data.length / 2);
		const startIndex = maxOnRow * row;
		const endIndex = startIndex + maxOnRow;

		return data.filter(
			(item, index) => index >= startIndex && index < endIndex
		);
	};

	return (
		<HomeSlidersContext.Provider
			value={{
				prevDisabled,
				nextDisabled,
				scrollNext,
				scrollPrev,
				filterRow,
			}}
		>
			{children}
		</HomeSlidersContext.Provider>
	);
};

export { HomeSlidersContext, HomeSlidersProvider };
