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
	Error,
} from "./pages";
import { SlidersProvider } from "./context/SlidersContext";
import "./scss/main.scss";
import ShippingAddress from "./pages/ShippingAddress";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import SingleOrder from "./pages/SingleOrder";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<SlidersProvider>
						<Home />
					</SlidersProvider>
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
				<Route path="/shipping">
					<ShippingAddress />
				</Route>
				<Route path="/payment">
					<Payment />
				</Route>
				<Route exact path="/placeorder">
					<PlaceOrder />
				</Route>
				<Route exact path="/placeorder/:id">
					<SingleOrder />
				</Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
