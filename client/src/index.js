import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { AuthProvider } from "./context/AuthContext";
import { CheckoutProvider } from "./context/CheckoutContext";

ReactDOM.render(
	<React.StrictMode>
		<CartProvider>
			<ProductsProvider>
				<AuthProvider>
					<CheckoutProvider>
						<App />
					</CheckoutProvider>
				</AuthProvider>
			</ProductsProvider>
		</CartProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
