import React, { useState, useRef } from "react";

const HomeSlidersContext = React.createContext();

const HomeSlidersProvider = ({ children }) => {
	const [prevDisabled, setPrevDisable] = useState(true);
	const [nextDisabled, setNextDisable] = useState(false);
	let [scrolledAmount, setScrolledAmount] = useState(0);

	const scrollNext = (slider, columnsInGrid) => {
		slider.current.scrollLeft += slider.current.offsetWidth / columnsInGrid;
		setScrolledAmount(
			(scrolledAmount += slider.current.offsetWidth / columnsInGrid)
		);
		console.log(slider.current.scrollLeft);

		checkButtons();
	};

	const scrollPrev = (slider, columnsInGrid) => {
		slider.current.scrollLeft -= slider.current.offsetWidth / columnsInGrid;
		setScrolledAmount(
			(scrolledAmount -= slider.current.offsetWidth / columnsInGrid)
		);
		console.log(slider.current.scrollLeft);

		checkButtons();
	};

	const checkButtons = (slider) => {
		const isPrevDisabled = scrolledAmount <= 0;
		const isNextDisabled =
			scrolledAmount + slider.current.offsetWidth >=
			slider.current.scrollWidth;

		setPrevDisable(isPrevDisabled);
		setNextDisable(isNextDisabled);
	};

	return (
		<HomeSlidersContext.Provider
			value={{
				prevDisabled,
				nextDisabled,
				scrollNext,
				scrollPrev,
				checkButtons,
			}}
		>
			{children}
		</HomeSlidersContext.Provider>
	);
};

export { HomeSlidersContext, HomeSlidersProvider };
