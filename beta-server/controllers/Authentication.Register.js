const User = require("../models/User");
const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

module.exports = {
  RegisterUser: (req, res, next) => {
    const { email, password } = req.body;
    /**
     * @dev Generate the value with a cryptographically
     * strong random number generator and do not hardcode it in source code.
     * * Recommended from Snyk Vulnerability Scanner
     * */
    crypto.randomInt(3, async (err, cryptographicallySecuredRandomNumber) => {
      if (err) throw err;

      const _id = new mongoose.Types.ObjectId();

      const createUserAuthenticationDocument = User.create({
        _id,
        email,
        password: bcrypt.hashSync(
          password,
          cryptographicallySecuredRandomNumber
        ),
      });

      /** @dev handle promise synchronously at once with error handling */
      Promise.all([createUserAuthenticationDocument])
        .then(() => {
          res.status(200).json({
            sytatus: 200,
            message: "User created successfully!",
          });
        })
        .catch((err) => console.log(err));
    });
  },
};
