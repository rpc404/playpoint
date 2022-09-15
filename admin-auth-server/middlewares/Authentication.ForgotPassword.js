const Joi = require("joi");
const User = require("../models/User");
const { sanitizeQueryInput } = require("../utils/QuerySanitizer");

module.exports = {
  ForgotPasswordMiddleware: async (req, res, next) => {
    try {
      //
      const { email } = req.body;

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

      await NewUserSchema.validateAsync(req.body);

    //   return res.status(400).json({
    //     msg: error?.details[0]?.message,
    //   });

      const existingUser = await User.findOne({ email: sanitizeQueryInput(email) });
      if (existingUser)
        return res.status(200).json({
          msg: "User with given email matched!",
        });

    } catch (error) {
      console.error(error);
    }
  },
};
