const express = require("express");
const router = express.Router();
const verify = require("../routes/verifyToken");
const {
	userRegister,
	userLogin,
	getAllUsers,
	getUser,
} = require("../controllers/UsersController");

router.get("/", getAllUsers);
router.get("/:id", verify, getUser);
router.post("/register", userRegister);
router.post("/login", userLogin);

module.exports = router;
