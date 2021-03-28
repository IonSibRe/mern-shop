import React, { useContext } from "react";
import { HomeSlidersContext } from "../../context/HomeSlidersContext";

const ShowcaseHeading = ({ slider, columnsInGrid, title }) => {
	const { prevDisabled, nextDisabled, scrollPrev, scrollNext } = useContext(
		HomeSlidersContext
	);
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
					onClick={() => scrollPrev(slider, columnsInGrid)}
				>
					<i className="fas fa-less-than fp-sign"></i>
				</button>
				<button
					className={`home-showcase-btn next-btn ${
						nextDisabled && "btn-disabled"
					}`}
					disabled={nextDisabled}
					onClick={() => scrollNext(slider, columnsInGrid)}
				>
					<i className="fas fa-greater-than fp-sign"></i>
				</button>
			</div>
		</>
	);
};

export default ShowcaseHeading;
