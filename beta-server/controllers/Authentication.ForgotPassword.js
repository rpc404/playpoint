const User = require("../models/User");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const { sanitizeQueryInput } = require("../utils/QuerySanitizer");

module.exports = {
  ForgotPassword: async (req, res) => {
    const { password, _id } = req.body;

    try {
      /**
       * @dev Generate the value with a cryptographically
       * strong random number generator and do not hardcode it in source code.
       * * Recommended from Snyk Vulnerability Scanner
       * */
      crypto.randomInt(3, async (err, cryptographicallySecuredRandomNumber) => {
        if (err) throw err;

        try {
          User.updateOne(
            {
              _id: sanitizeQueryInput(_id),
            },
            {
              $set: {
                password:
                  password &&
                  bcrypt.hashSync(
                    password,
                    cryptographicallySecuredRandomNumber
                  ),
              },
            }
          )
            .then(() => {
              res.status(200).json({
                message: "Password Recovered Successfully!",
              });
            })
            .catch((err) => console.error(err));
        } catch (error) {
          console.error(error);
        }
      });
    } catch (error) {
      console.error(error);
    }
  },
};
