const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const products = require("./routes/products");
const connectToDatabase = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectToDatabase();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use("/api/v1/products", products);

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
