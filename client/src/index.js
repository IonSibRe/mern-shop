import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
	<React.StrictMode>
		<CartProvider>
			<ProductsProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ProductsProvider>
		</CartProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
