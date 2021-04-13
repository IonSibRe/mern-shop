const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: [true, "Please add a title"],
	},
	category: {
		type: String,
		trim: true,
		required: [true, "Please add a category"],
	},
	manufacturer: {
		type: String,
		trim: true,
		required: [true, "Please add a manufacturer"],
	},
	price: {
		type: Number,
		required: [true, "Please add a price"],
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Product", ProductSchema);
