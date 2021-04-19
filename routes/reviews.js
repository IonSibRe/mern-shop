const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");

// Placeholder
router.get("/", verify, (req, res) => {
	res.json({ success: true, user: req.user });
});

module.exports = router;
