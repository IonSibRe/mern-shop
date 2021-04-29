import React from "react";
import loaderSpinner from "../assets/loader-spinner.gif";

const Loader = () => {
	return (
		<div className="loader-wrap">
			<img
				src={loaderSpinner}
				alt="Loading Spinner"
				className="loader-img"
			/>
		</div>
	);
};

export default Loader;
