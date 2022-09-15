const { newFixtureController } = require("../controllers/Fixture");

const FixtureRouter = require("express").Router();

FixtureRouter.post("/new-fixture", newFixtureController)

module.exports = FixtureRouter;