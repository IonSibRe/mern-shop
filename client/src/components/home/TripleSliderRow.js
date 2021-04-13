import React, { useContext } from "react";
import { HomeSlidersContext } from "../../context/HomeSlidersContext";
import TripleSliderItem from "./TripleSliderItem";

const TripleSliderRow = ({ data, row, rowCount }) => {
	const { filterRow } = useContext(HomeSlidersContext);
	const displayData = filterRow(data, row, rowCount);
	return (
		<div className="ts-showcase-inner-wrap home-showcase-inner-wrap">
			{displayData.map((item) => (
				<TripleSliderItem item={item} key={item.id}></TripleSliderItem>
			))}
		</div>
	);
};

export default TripleSliderRow;
