import React from "react";

const HomeSlidersContext = React.createContext();

const HomeSlidersProvider = ({ children }) => {
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
		<HomeSlidersContext.Provider
			value={{
				filterRow,
			}}
		>
			{children}
		</HomeSlidersContext.Provider>
	);
};

export { HomeSlidersContext, HomeSlidersProvider };
