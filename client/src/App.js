import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
	Home,
	About,
	Products,
	SingleItem,
	Contact,
	Cart,
	Login,
	Register,
	Profile,
	Checkout,
	Error,
} from "./pages";
import { HomeSlidersProvider } from "./context/HomeSlidersContext";
import "./scss/main.scss";

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
				<Route exact path="/products">
					<Products />
				</Route>
				<Route exact path="/products/:id">
					<SingleItem />
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
				<Route path="/profile">
					<Profile />
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
