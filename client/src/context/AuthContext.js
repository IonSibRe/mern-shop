import React, { useEffect, useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";

const AuthContext = React.createContext();

const initialState = {
	user: {},
	loggedIn: false,
	error: null,
};

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, initialState);

	const url = "http://localhost:5000/api/v1/user";

	const login = async (email, password) => {
		try {
			const res = await fetch(`${url}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			const data = await res.json();

			if (data.success) {
				localStorage.setItem(
					"login",
					JSON.stringify({ token: data.token, _id: data._id })
				);
				getCurrentUser(data._id, data.token);
			}

			dispatch({ type: "LOGIN", payload: data });
		} catch (err) {
			console.log(err);
		}
	};

	const logout = () => {
		localStorage.removeItem("login");
		dispatch({ type: "LOGOUT" });
	};

	const register = async (username, email, password) => {
		try {
			const res = await fetch(`${url}/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					email,
					password,
				}),
			});
			const data = await res.json();

			if (data.success) {
				login(email, password);
			}

			dispatch({ type: "REGISTER", payload: data });
		} catch (err) {
			console.log(err);
		}
	};

	const getCurrentUser = async (_id, token) => {
		try {
			const res = await fetch(`${url}/${_id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"auth-token": token,
				},
			});

			const data = await res.json();
			if (data.success) {
				dispatch({ type: "GET_USER", payload: data });
			}
			return;
		} catch (err) {
			console.log(err);
		}
	};

	const resetError = () => {
		dispatch({ type: "RESET_ERROR" });
	};

	useEffect(() => {
		const localLogin = JSON.parse(localStorage.getItem("login"));

		if (localLogin) {
			getCurrentUser(localLogin._id, localLogin.token);
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{ ...state, login, register, logout, resetError }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
