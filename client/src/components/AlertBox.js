import React from "react";

const AlertBox = ({ success, msg }) => {
	return (
		<div
			className={`alert-wrap ${
				success ? "alert-success" : "alert-error"
			}`}
		>
			<p className="alert-text">{msg}</p>
		</div>
	);
};

export default AlertBox;
