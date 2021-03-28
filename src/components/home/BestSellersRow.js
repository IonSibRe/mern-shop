import React, { useContext } from "react";
import { HomeSlidersContext } from "../../context/HomeSlidersContext";
import BestSellersItem from "./BestSellersItem";

const BestSellersRow = ({ data, row }) => {
	const { filterRow } = useContext(HomeSlidersContext);
	const displayData = filterRow(data, row);

	return (
		<div className="home-showcase-inner-wrap best-sellers-showcase-inner-wrap">
			{displayData.map((item) => (
				<BestSellersItem item={item} key={item.id}></BestSellersItem>
			))}
		</div>
	);
};

export default BestSellersRow;
