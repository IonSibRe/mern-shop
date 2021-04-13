const Product = require("../models/Product");

// @desc Get all products
// @route GET /api/v1/products
const getProducts = async (req, res, next) => {
	try {
		const products = await Product.find();

		return res.status(200).json({
			success: true,
			count: products.length,
			data: products,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

// @desc add single product
// @route POST /api/v1/products
const addProduct = async (req, res, next) => {
	try {
		const product = await Product.create(req.body);

		return res.status(201).json({
			success: true,
			data: product,
		});
	} catch (err) {
		if (err.name === "ValidationError") {
			const messages = Object.values(err.errors).map(
				(value) => value.messages
			);

			return res.status(400).json({
				success: false,
				error: messages,
			});
		} else {
			return res.status(500).json({
				success: false,
				error: "Server Error",
			});
		}
	}
};

// @desc add multiple products
// @route POST /api/v1/products
const addProducts = async (req, res, next) => {
	try {
		const products = req.body;

		products.forEach(async (product) => {
			await Product.create(product);
		});

		return res.status(201).json({
			success: true,
			data: products,
		});
	} catch (err) {
		if (err.name === "ValidationError") {
			const messages = Object.values(err.errors).map(
				(value) => value.messages
			);

			return res.status(400).json({
				success: false,
				error: messages,
			});
		} else {
			return res.status(500).json({
				success: false,
				error: "Server Error",
			});
		}
	}
};

// @desc delete product
// @route DELETE /api/v1/products/:id
const deleteProduct = async (req, res, next) => {
	try {
		const product = await Product.findById(req.params.id);

		if (!product) {
			return res.status(404).json({
				success: false,
				error: "No product found",
			});
		}

		await product.remove();

		return res.status(200).json({
			success: true,
			data: {},
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

module.exports = { getProducts, addProduct, addProducts, deleteProduct };
