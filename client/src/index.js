import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { AuthProvider } from "./context/AuthContext";
import { CheckoutProvider } from "./context/CheckoutContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
	"client-id":
		"AW7Lv1z8OC9-06Iv9wZT5eeQK_eRX0Jr-MLUEa-2VLjJNF8696Onlp9BXmF7Irnm1wpB-R0KHZPyhPXM",
	currency: "USD",
	intent: "capture",
};

ReactDOM.render(
	<React.StrictMode>
		<CartProvider>
			<ProductsProvider>
				<AuthProvider>
					<PayPalScriptProvider options={initialOptions}>
						<CheckoutProvider>
							<App />
						</CheckoutProvider>
					</PayPalScriptProvider>
				</AuthProvider>
			</ProductsProvider>
		</CartProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
