const AuthReducer = (state, action) => {
	switch (action.type) {
		case "REGISTER":
			if (!action.payload.success) {
				return {
					...state,
					error: action.payload.msg,
				};
			}

			return {
				...state,
				user: { ...state.user, id: action.payload.userID },
			};

		case "LOGIN":
			if (!action.payload.success) {
				return {
					...state,
					error: action.payload.msg,
				};
			}

			return {
				...state,
				loggedIn: true,
			};

		case "LOGOUT":
			return {
				...state,
				loggedIn: false,
			};

		case "GET_USER":
			return {
				...state,
				user: action.payload.data,
				loggedIn: true,
			};

		case "RESET_ERROR":
			return {
				...state,
				error: null,
			};

		default:
			throw new Error("No method matched the dispatch");
	}
};

export default AuthReducer;
