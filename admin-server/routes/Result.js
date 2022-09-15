const {
  newResultController,
  getResultController,
  updateResultController,
  deleteResultController,
} = require("../controllers/Result");

const ResultRouter = require("express").Router();

ResultRouter.get("/get-result", getResultController)
  .post("/new-result", newResultController)
  .patch("/update-result", updateResultController)
  .delete("/delete-result", deleteResultController);

module.exports = ResultRouter;
