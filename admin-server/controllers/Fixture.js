const Fixture = require("../models/Fixture");
const { sanitizeQueryInput } = require("../utils/QuerySanitizer");

module.exports = {
  getFixturesController: async (req, res) => {
    try {
      const fixtures = await Fixture.find()
      res.status(200).json({ fixtures });
    } catch (error) {
      console.error(error);
    }
  },
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
  updateFixturesController: async (req, res) => {
    const { _id } = req.body;

    try {
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
      const tempFixture = await Fixture.findOne({
        _id: sanitizeQueryInput(_id),
      });

      Fixture.updateOne(
        { _id: sanitizeQueryInput(_id) },
        {
          $set: {
            marketplaceSlug: marketplaceSlug || tempFixture.marketplaceSlug,
            MatchNumber: MatchNumber || tempFixture.MatchNumber,
            RoundNumber: RoundNumber || tempFixture.RoundNumber,
            DateUtc: DateUtc || tempFixture.DateUtc,
            Location: Location || tempFixture.Location,
            HomeTeam: HomeTeam || tempFixture.HomeTeam,
            AwayTeam: AwayTeam || tempFixture.AwayTeam,
            Group: Group || tempFixture.Group,
            HomeTeamScore: HomeTeamScore || tempFixture.HomeTeamScore,
            AwayTeamScore: AwayTeamScore || tempFixture.AwayTeamScore,
          },
        }
      )
        .then(() =>
          res
            .status(200)
            .json({ message: "Updated Fixture Successfully!" })
        )
        .catch((error) => console.error(error));
    } catch (error) {}
  },
  deleteFixtureController: (req, res) => {
    const { _id } = req.body;
    Fixture.deleteOne({ _id: sanitizeQueryInput(_id) })
      .then(() =>
        res.status(200).json({ message: "Deleted Fixture Successfully!" })
      )
      .catch((error) => console.error(error));
  },
};
