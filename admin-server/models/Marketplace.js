const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

/**
 *
 * @param {*} type => Can be Number, String or any data type
 * @param {*} require => It stores boolean value, either the variable is required on every user creation or not
 * @param {*} requiredMessage => If the boolean for require === true, then the specific message descripting why it's required
 * @returns Returns an object with type and require value
 */
const returnType = (type, require, requiredMessage) => {
  return {
    type,
    require: require === true ? [require, requiredMessage] : [false],
  };
};

const marketplaceSchema = new Schema({
  marketplaceSlug: {
    ...returnType(String, true, "Marketplace slug is required!"),
    unique: [true, "Marketplace slug must be unique!"],
  },
  marketplaceName: returnType(String, true, "Marketplace name is required!"),
  marketplaceCoverImage: returnType(
    String,
    true,
    "Cover image url is required!"
  ),
  marketSummary: {
    fixturesCount: {
      type: Number,
      default: 0
    },
    questionairesCount: {
      type: Number,
      default: 0
    },
    resultsCount: {
      type: Number,
      default: 0
    },
    predictionsCount: {
      type: Number,
      default: 0
    },
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: Date,
});

module.exports = Model("marketplace", marketplaceSchema);
