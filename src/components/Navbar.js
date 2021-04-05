import React from "react";
import { Link } from "react-router-dom";
import logo_img from "../assets/img/mern-logo.jpg";

const pages = [
	{
		id: 1,
		name: "home",
		url: "/",
	},
	{
		id: 2,
		name: "about",
		url: "/about",
	},
	{
		id: 3,
		name: "products",
		url: "/products",
	},
	{
		id: 4,
		name: "contact",
		url: "/contact",
	},
];

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="nav-upper">
				<div className="nav-upper-inner">
					<div className="nav-logo-wrap">
						<img
							src={logo_img}
							alt="Logo"
							className="nav-logo-img"
						/>
						<h2 className="nav-logo-title">MERN</h2>
					</div>
					<div className="nav-search-wrap">
						<form className="nav-form">
							<input
								type="search"
								name="search-field"
								placeholder="Search Products"
								className="nav-input"
							/>
							<button type="submit" className="nav-sub-btn">
								Search
							</button>
						</form>
					</div>
					<div className="nav-user-wrap">
						<Link
							to="/cart"
							className="nav-upper-link nav-cart-link"
						>
							<i className="fas fa-shopping-cart nav-upper-i"></i>
							Cart
						</Link>
						<Link
							to="/login"
							className="nav-upper-link nav-sign-in-link"
						>
							<i className="fas fa-user nav-upper-i"></i>
							Sign In
						</Link>
					</div>
				</div>
			</div>
			<div className="nav-lower">
				<div className="nav-lower-inner">
					<div className="nav-lower-links-wrap">
						<ul className="nav-lower-ul">
							{pages.map((page) => {
								const { id, name, url } = page;
								return (
									<li className="nav-lower-li" key={id}>
										<Link
											to={url}
											className="nav-lower-link"
										>
											{name}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
