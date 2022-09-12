const Joi = require("joi");
const User = require("../models/User");
const { sanitizeQueryInput } = require("../utils/QuerySanitizer");

module.exports = {
  RegisterUserMiddleware: async (req, res, next) => {
    const { email } = req.body;
    /**
     * @validation => User Input Validation
     */
    const NewUserSchema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net", "org", "me"] },
        })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .min(8),
    });

    try {
      await NewUserSchema.validateAsync(req.body);
    } catch (error) {
      return res.status(400).json({
        msg: error?.details[0]?.message,
      });
    }

    /**
     * @validation => check if user with provided email exists
     */
    try {
      const existingUser = await User.findOne({ email: sanitizeQueryInput(email) });
      if (existingUser)
        return res.status(400).json({
          msg: "User with given email already exists!",
        });
    } catch (error) {
      console.error(error);
    }

    /**
     * @validation => on success next()
     */
    next();
  },
};
