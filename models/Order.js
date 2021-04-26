const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
	{
		orderItems: [
			{
				id: { type: String, required: true },
				title: { type: String, required: true },
				price: { type: Number, required: true },
				img: { type: String, required: true },
				amount: { type: Number, required: true },
				total: { type: Number, required: true },
			},
		],
		shippingAddress: {
			fullName: { type: String, required: true },
			address: { type: String, required: true },
			city: { type: String, required: true },
			postalCode: { type: String, required: true },
			country: { type: String, required: true },
		},
		paymentMethod: { type: String, required: true },
		itemsPrice: { type: Number, required: true },
		shippingPrice: { type: Number, required: true },
		taxPrice: { type: Number, required: true },
		totalPrice: { type: Number, required: true },
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		isPaid: { type: Boolean, default: false },
		paidAt: { type: Date },
		isDelivered: { type: Boolean, default: false },
		deliveredAt: { type: Date },
	},
	{ timestamps: true, collection: "orders" }
);

module.exports = mongoose.model("Order", OrderSchema);
