import React from "react";
import { Link } from "react-router-dom";

const ErrorSection = () => {
	return (
		<section className="es-wrap section-center">
			<div className="es-text-wrap">
				<h1 className="es-title">404</h1>
				<h2 className="es-subtitle">
					page you are looking for is not found
				</h2>
				<p className="es-desc">
					The page you are looking for does not exist. It may have
					been moved, or removed altogether. Perhaps you can return
					back to the site's homepage and see if you can find what you
					are looking for.
				</p>
				<Link to="/" className="es-btn">
					home
				</Link>
			</div>
		</section>
	);
};

export default ErrorSection;
