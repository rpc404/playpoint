const Fixture = require("../models/Fixture");

module.exports = {
  newFixtureController: (req, res) => {
    const {
      marketplaceSlug,
      MatchNumber,
      RoundNumber,
      DateUtc,
      Location,
      HomeTeam,
      AwayTeam,
      Group,
      HomeTeamScore,
      AwayTeamScore,
    } = req.body;

    const newFixture = Fixture.create({
      marketplaceSlug,
      MatchNumber,
      RoundNumber,
      DateUtc,
      Location,
      HomeTeam,
      AwayTeam,
      Group,
      HomeTeamScore,
      AwayTeamScore,
    });

    Promise.all([newFixture])
      .then(() => {
        res.status(200).json({ message: "New Fixture created successfully!" });
      })
      .catch((err) => console.error(err));
  },
};
