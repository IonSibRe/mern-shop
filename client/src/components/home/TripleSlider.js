import React, { useEffect, useRef, useState } from "react";
import TripleSliderSingle from "./TripleSliderSingle";
import { v4 as uuidv4 } from "uuid";
import {
	home_showcase_img_1,
	home_showcase_img_2,
	home_showcase_img_3,
	home_showcase_img_4,
	home_showcase_img_5,
	home_showcase_img_6,
	home_showcase_img_7,
	home_showcase_img_8,
} from "../../sample_data/home_images";

const TripleSlider = () => {
	const data = [
		{
			id: uuidv4(),
			img: home_showcase_img_1,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_2,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_3,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_4,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_5,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_6,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_7,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
		{
			id: uuidv4(),
			img: home_showcase_img_8,
			title: "Lorem ipsum dolor sit.",
			price: 20.0,
		},
	];
	const firstSlider = useRef(null);
	const secondSlider = useRef(null);
	const thirdSlider = useRef(null);
	const [firstRowCount, setFirstSliderRowCount] = useState(0);
	const [secondRowCount, setSecondSliderRowCount] = useState(0);
	const [thirdRowCount, setThirdSliderRowCount] = useState(0);
	const columnsInGrid = 1;

	useEffect(() => {
		setFirstSliderRowCount(firstSlider.current.children.length);
		setSecondSliderRowCount(secondSlider.current.children.length);
		setThirdSliderRowCount(thirdSlider.current.children.length);
	}, [firstSlider, secondSlider, thirdSlider]);

	return (
		<section className="ts-wrap section-center">
			<TripleSliderSingle
				data={data}
				slider={firstSlider}
				columnsInGrid={columnsInGrid}
				rowCount={firstRowCount}
				title={"home audio"}
			/>
			<TripleSliderSingle
				data={data}
				slider={secondSlider}
				columnsInGrid={columnsInGrid}
				rowCount={secondRowCount}
				title={"headphones"}
			/>
			<TripleSliderSingle
				data={data}
				slider={thirdSlider}
				columnsInGrid={columnsInGrid}
				rowCount={thirdRowCount}
				title={"television & video"}
			/>
		</section>
	);
};

export default TripleSlider;
