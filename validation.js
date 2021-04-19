const Joi = require("joi");

// Register Validation
const registerValidation = (data) => {
	const validationSchema = Joi.object({
		username: Joi.string().min(4).max(15).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).required(),
	});

	return validationSchema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
	const validationSchema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(6).required(),
	});

	return validationSchema.validate(data);
};

module.exports = { registerValidation, loginValidation };
