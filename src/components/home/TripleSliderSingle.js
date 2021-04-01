import React from "react";
import ShowcaseHeading from "./ShowcaseHeading";
import TripleSliderRow from "./TripleSliderRow";

const TripleSliderSingle = ({
	data,
	slider,
	columnsInGrid,
	rowCount,
	title,
}) => {
	return (
		<div className="ts-showcase-wrap">
			<div className="home-showcase-title-wrap">
				<ShowcaseHeading
					slider={slider}
					columnsInGrid={columnsInGrid}
					title={title}
				/>
			</div>
			<div className="ts-single-slider-wrap" ref={slider}>
				<TripleSliderRow data={data} row={0} rowCount={rowCount} />
				<TripleSliderRow data={data} row={1} rowCount={rowCount} />
				<TripleSliderRow data={data} row={2} rowCount={rowCount} />
			</div>
		</div>
	);
};

export default TripleSliderSingle;
