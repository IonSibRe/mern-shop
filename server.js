const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const products = require("./routes/products");
const auth = require("./routes/auth");
const orders = require("./routes/orders");
const reviews = require("./routes/reviews");
const connectToDatabase = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectToDatabase();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/v1/products", products);
app.use("/api/v1/user", auth);
app.use("/api/v1/orders", orders);
app.use("/api/v1/reviews", reviews);

// Development
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// Production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
	);
}

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} on PORT: ${PORT}`)
);
