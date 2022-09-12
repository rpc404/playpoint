const User = require("../models/User");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const { sanitizeQueryInput } = require("../utils/QuerySanitizer");

module.exports = {
  UpdateUser: async (req, res) => {
    /**
     * @dev _id must be passed on req header on middleware
     */
    const { email, password, _id } = req.body;

    /**
     * @dev Generate the value with a cryptographically
     * strong random number generator and do not hardcode it in source code.
     * * Recommended from Snyk Vulnerability Scanner
     * */
    crypto.randomInt(3, async (err, cryptographicallySecuredRandomNumber) => {
      if (err) throw err;

      try {
        const user = await User.findOne({ _id: sanitizeQueryInput(_id) });

        User.updateOne(
          {
            _id: sanitizeQueryInput(_id),
          },
          {
            $set: {
              email: email || user.email,
              password:
                (password &&
                  bcrypt.hashSync(
                    password,
                    cryptographicallySecuredRandomNumber
                  )) ||
                user.password,
            },
          }
        )
          .then(() => {
            res.status(200).json({
              message: "User updated successfully",
            });
          })
          .catch((err) => console.error(err));
      } catch (error) {
        console.error(error);
      }
    });
  },
};
