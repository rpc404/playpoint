const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const ObjectId = Schema.ObjectId;

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

/**
 * @documentation User Schema
 * Params => Email, Password from client, _id from server & on update of document update_at is updated with Date value
 */
const userSchema = new Schema({
  _id: ObjectId,
  email: {
    ...returnType(String, true, "Email is required!"),
    unique: [true, "Email must be unique!"],
  },
  password: returnType(String, true, "Password is required"),
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: Date,
});

module.exports = Model("user", userSchema);
