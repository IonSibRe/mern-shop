import React, { useContext } from "react";
import { SlidersContext } from "../../context/SlidersContext";
import TripleSliderItem from "./TripleSliderItem";

const TripleSliderRow = ({ data, row, rowCount }) => {
	const { filterRow } = useContext(SlidersContext);
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
