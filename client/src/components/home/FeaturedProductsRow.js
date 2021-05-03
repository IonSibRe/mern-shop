import React, { useContext } from "react";
import FeaturedProductsItem from "../home/FeaturedProductsItem";
import { SlidersContext } from "../../context/SlidersContext";

const FeaturedProductsRow = ({ data, row, rowCount }) => {
	const { filterRow } = useContext(SlidersContext);
	const displayData = filterRow(data, row, rowCount);
	return (
		<div className="fp-showcase-inner-wrap home-showcase-inner-wrap">
			{displayData.map((item) => (
				<FeaturedProductsItem
					item={item}
					key={item.id}
				></FeaturedProductsItem>
			))}
		</div>
	);
};

export default FeaturedProductsRow;
