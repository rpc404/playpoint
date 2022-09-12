const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { sanitizeQueryInput } = require("../utils/QuerySanitizer");

module.exports = {
  LoginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      /** @dev retrieve user details using email, if email does not exist return response */
      const user = await User.findOne({ email: sanitizeQueryInput(email) });
      if (!user)
        return res.status(301).json({
          msg: "User email not found!",
        });

      const isPasswordMatch = await bcrypt.compare(password, user?.password);
      if (!isPasswordMatch)
        return res.status(401).json({
          message: "Invalid password!",
          status: 401,
        });

      /**
       * @dev Access token normally should last 60 days & Refresh Token for a year
       * * Reference: https://docs.microsoft.com/en-us/linkedin/shared/authentication/programmatic-refresh-tokens
       */
      /** @dev generate auth token */
      const token = await jwt.sign(
        {
          data: user?._id,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "60 days" }
      );

      /** @dev generate refresh token */
      const refreshToken = await jwt.sign(
        {
          data: user?._id,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "365 days" }
      );

      /**
       * @dev on successful authentication response with token and refresh token
       */
      res.status(200).json({
        message: "User authenticated.",
        token,
        refreshToken,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
