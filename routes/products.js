const express = require("express");
const router = express.Router();
const {
	getProducts,
	addProduct,
	addProducts,
	deleteProduct,
} = require("../controllers/ProductsController");

router.route("/").get(getProducts).post(addProduct);
router.route("/multiple").post(addProducts);

router.route("/:id").delete(deleteProduct);

module.exports = router;
