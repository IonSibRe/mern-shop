import React from "react";

const Pagination = ({ productsPerPage, totalProducts, setCurrentPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="pagination-wrap">
			{pageNumbers.map((number) => {
				return (
					<button
						className="pagination-item"
						key={number}
						onClick={() => setCurrentPage(number)}
					>
						{number}
					</button>
				);
			})}
		</div>
	);
};

export default Pagination;
