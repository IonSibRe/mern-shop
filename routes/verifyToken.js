const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
	const token = req.header("auth-token");
	if (!token)
		return res.status(401).json({ success: false, msg: "Access Denied" });

	try {
		const verify = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verify;
		next();
	} catch (err) {
		res.status(400).json({ success: false, msg: "Invalid Token" });
	}
};

module.exports = auth;
