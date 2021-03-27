import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
	Home,
	About,
	Products,
	Contact,
	Cart,
	Login,
	Register,
	Checkout,
	Error,
} from "./pages";
import { HomeSlidersProvider } from "./context/HomeSlidersContext";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<HomeSlidersProvider>
						<Home />
					</HomeSlidersProvider>
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/products">
					<Products />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/checkout">
					<Checkout />
				</Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
