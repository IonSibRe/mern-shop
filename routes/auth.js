const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
	// Validation
	const validation = registerValidation(req.body);
	if (validation.error)
		return res.status(400).send(validation.error.details[0].message);

	// If email already in DB
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) return res.status(400).send("Email already exists");

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
	});

	try {
		const newUser = await User.create(user);
		res.send({ userID: newUser._id });
	} catch (err) {
		res.status(400).send(err);
	}
});

router.post("/login", async (req, res) => {
	// Validation
	const validation = loginValidation(req.body);
	if (validation.error)
		return res.status(400).send(validation.error.details[0].message);

	// If email already in DB
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Invalid Email");

	// Password check
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send("Invalid Password");

	// Create & Assign JWT Token
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header("auth-token", token).send(token);
});

module.exports = router;

/* TODO:
    - Add username in db validation
    - Fix validation error response
*/
