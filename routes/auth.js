const express = require("express");
const router = express.Router();
const verify = require("../routes/verifyToken");
const {
	userRegister,
	userLogin,
	getAllUsers,
	getUser,
	updateUser,
	changePassword,
} = require("../controllers/UsersController");

router.get("/", getAllUsers);
router.get("/:id", verify, getUser);
router.patch("/:id", verify, updateUser);
router.patch("/:id/password", verify, changePassword);
router.post("/register", userRegister);
router.post("/login", userLogin);

module.exports = router;
