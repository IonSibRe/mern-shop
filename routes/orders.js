const express = require("express");
const Order = require("../models/Order");
const verify = require("../routes/verifyToken");
const router = express.Router();

router.post("/all", verify, async (req, res, next) => {
	try {
		const orders = await Order.find({ user_id: req.body.user_id });

		if (!orders)
			res.status(400).json({ success: false, msg: "No Orders Found" });

		res.status(200).json({
			success: true,
			count: orders.length,
			allOrders: orders,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
			msg: err,
		});
	}
});

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
			error: "Server Error",
			msg: err,
		});
	}
});

router.get("/:id", verify, async (req, res, next) => {
	try {
		const order = await Order.findById(req.params.id);

		if (!order)
			res.status(404).json({ success: false, msg: "Order Not Found" });

		res.status(200).json({ success: true, order: order });
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
			msg: err,
		});
	}
});

router.put("/:id/pay", verify, async (req, res, next) => {
	try {
		const order = await Order.findById(req.params.id);

		if (!order)
			res.status(404).json({ success: false, msg: "Order Not Found" });

		order.isPaid = true;
		order.paidAt = Date.now();
		order.paymentResult = {
			id: req.body.id,
			status: req.body.status,
			update_time: req.body.update_time,
			email_address: req.body.email_address,
		};

		const updatedOrder = await order.save();
		res.status(200).json({
			success: true,
			msg: "Order Paid",
			order: updatedOrder,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
			msg: err,
		});
	}
});

module.exports = router;
