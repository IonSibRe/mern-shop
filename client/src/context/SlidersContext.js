import React from "react";

const SlidersContext = React.createContext();

const SlidersProvider = ({ children }) => {
	// Data
	const filterRow = (data, row, rowCount) => {
		const maxOnRow = Math.ceil(data.length / rowCount);
		const startIndex = maxOnRow * row;
		const endIndex = startIndex + maxOnRow;

		return data.filter(
			(item, index) => index >= startIndex && index < endIndex
		);
	};

	return (
		<SlidersContext.Provider
			value={{
				filterRow,
			}}
		>
			{children}
		</SlidersContext.Provider>
	);
};

export { SlidersContext, SlidersProvider };
