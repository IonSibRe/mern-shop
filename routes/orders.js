const express = require("express");
const Order = require("../models/Order");
const verify = require("../routes/verifyToken");
const router = express.Router();

router.post("/", verify, async (req, res, next) => {
	try {
		if (req.body.orderItems.length === 0)
			res.status(400).json({ success: false, msg: "Cart is Empty" });

		const order = new Order({
			orderItems: req.body.orderItems,
			shippingAddress: req.body.shippingAddress,
			paymentMethod: req.body.paymentMethod,
			itemsPrice: req.body.itemsPrice,
			shippingPrice: req.body.shippingPrice,
			taxPrice: req.body.taxPrice,
			totalPrice: req.body.totalPrice,
			user_id: req.body.user_id,
		});

		const createdOrder = await Order.create(order);

		return res.status(201).json({
			success: true,
			msg: "Order Created",
			order: createdOrder,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error dasdas",
			msg: err,
		});
	}
});

module.exports = router;
