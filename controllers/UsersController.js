const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");

// @desc Create new user.
// @route POST /api/v1/user/register
const userRegister = async (req, res, next) => {
	// Validation
	const validation = registerValidation(req.body);
	if (validation.error)
		return res.status(400).json({
			success: false,
			msg: validation.error.details[0].message,
		});

	// If username already exists
	const usernameExists = await User.findOne({ username: req.body.username });
	if (usernameExists)
		return res
			.status(400)
			.json({ success: false, msg: "Username already exists" });

	// If email already exists
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists)
		return res
			.status(400)
			.json({ success: false, msg: "Email already exists" });

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
		res.json({ success: true, userID: newUser._id });
	} catch (err) {
		res.status(400).json({ success: false, error: err });
	}
};

// @desc Login user.
// @route POST /api/v1/user/login
const userLogin = async (req, res, next) => {
	// Validation
	const validation = loginValidation(req.body);
	if (validation.error)
		return res.status(400).json({
			success: false,
			msg: validation.error.details[0].message,
		});

	// If email doesn't exist
	const user = await User.findOne({ email: req.body.email });
	if (!user)
		return res
			.status(400)
			.json({ success: false, msg: "Invalid Email or Password" });

	// Password check
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass)
		return res
			.status(400)
			.json({ success: false, msg: "Invalid Email or Password" });

	// Create & Assign JWT Token
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
		expiresIn: "10h",
	});
	res.header("auth-token", token).json({
		success: true,
		_id: user._id,
		token: token,
	});
};

// @desc Get all users.
// @route GET /api/v1/user
const getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find();

		return res.status(200).json({
			success: true,
			count: users.length,
			data: users,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

// @desc Get User
// @route GET /api/v1/user/:id
const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);

		const newUser = {
			_id: user._id,
			username: user.username,
			email: user.email,
		};

		if (!user) {
			return res.status(404).json({
				success: false,
				error: "No user found",
			});
		}

		return res.status(200).json({
			success: true,
			data: newUser,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

// @desc Update User data
// @route PATCH /api/v1/user/:id
const updateUser = async (req, res, next) => {
	try {
		const filter = { _id: req.params.id };
		const update = { personalData: req.body };

		const updatedUser = await User.findOneAndUpdate(filter, update, {
			new: true,
		});

		return res.status(200).json({
			success: true,
			data: updatedUser,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

// @desc Change Password
// @route PATCH /api/v1/user/:id/password
const changePassword = async (req, res, next) => {
	try {
		const filter = { _id: req.params.id };

		const salt = await bcrypt.genSalt(10);
		const password = await bcrypt.hash(req.body.password, salt);

		const updatedUser = await User.findOneAndUpdate(
			filter,
			{ password },
			{
				new: true,
			}
		);

		const newUser = {
			_id: updatedUser._id,
			username: updatedUser.username,
			email: updatedUser.email,
		};

		return res.status(200).json({
			success: true,
			data: newUser,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

module.exports = {
	userRegister,
	userLogin,
	getAllUsers,
	getUser,
	updateUser,
	changePassword,
};
