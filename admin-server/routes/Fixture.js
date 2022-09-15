const {
  newFixtureController,
  getFixturesController,
  updateFixturesController,
  deleteFixtureController,
} = require("../controllers/Fixture");

const FixtureRouter = require("express").Router();

FixtureRouter.get("/get-fixtures", getFixturesController)
  .post("/new-fixture", newFixtureController)
  .patch("/update-fixture", updateFixturesController)
  .delete("/delete-fixture", deleteFixtureController);

module.exports = FixtureRouter;
