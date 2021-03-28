import React, { useContext } from "react";
import FeaturedProductsItem from "../home/FeaturedProductsItem";
import { HomeSlidersContext } from "../../context/HomeSlidersContext";

const FeaturedProductsRow = ({ data, row }) => {
	const { filterRow } = useContext(HomeSlidersContext);
	const displayData = filterRow(data, row);
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
