const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			max: 255,
			min: 4,
		},

		email: {
			type: String,
			required: true,
			max: 255,
		},

		password: {
			type: String,
			required: true,
			max: 255,
			min: 4,
		},

		date: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "users" }
);

module.exports = mongoose.model("User", UserSchema);
