import React, { useContext } from "react";
import { SlidersContext } from "../../context/SlidersContext";
import BestSellersItem from "./BestSellersItem";

const BestSellersRow = ({ data, row, rowCount }) => {
	const { filterRow } = useContext(SlidersContext);
	const displayData = filterRow(data, row, rowCount);

	return (
		<div className="home-showcase-inner-wrap best-sellers-showcase-inner-wrap">
			{displayData.map((item) => (
				<BestSellersItem item={item} key={item.id}></BestSellersItem>
			))}
		</div>
	);
};

export default BestSellersRow;
