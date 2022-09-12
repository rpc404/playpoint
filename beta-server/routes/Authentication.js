const express = require("express");
const AuthenticationRouter = express.Router();

const { LoginUser } = require("../controllers/Authentication.Login");
const { RegisterUser } = require("../controllers/Authentication.Register");
const { UpdateUser } = require("../controllers/Authentication.Update");
const {
  ForgotPassword,
} = require("../controllers/Authentication.ForgotPassword");
const {
  RegisterUserMiddleware,
} = require("../middlewares/Authentication.Register");

AuthenticationRouter.post(
  "/register",
  RegisterUserMiddleware,
  RegisterUser
)
  .post("/login", LoginUser)
  .put("/update-user", UpdateUser)
  .put("/forgot-password", ForgotPassword);

module.exports = AuthenticationRouter;
