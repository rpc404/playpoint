const Results = require("../models/Results");
const { sanitizeQueryInput } = require("../utils/QuerySanitizer");

module.exports = {
  newResultController: (req, res) => {
    const { questionaireId, results } = req.body;

    Results.create({
      questionaireId,
      results,
    })
      .then(() => {
        res.status(200).json({ message: "Results Created Successfully!" });
      })
      .catch((err) => console.error(err));
  },
  getResultController: (req, res) => {
    Results.find()
      .then((response) => res.status(200).json({ response: response }))
      .catch((err) => console.error(err));
  },
  updateResultController: async (req, res) => {
    const { _id, questionaireId, results } = req.body;
    const tempData = await Results.findOne({ _id: sanitizeQueryInput(_id) });

    Results.updateOne(
      { _id: sanitizeQueryInput(_id) },
      {
        $set: {
          questionaireId: questionaireId || tempData.questionaireId,
          results: results || tempData.results,
        },
      }
    )
      .then(() =>
        res.status(200).json({ message: "Result updated successfully!" })
      )
      .catch((error) => console.error(error));
  },
  deleteResultController: (req, res) => {
    const { _id } = req.body;

    Results.deleteOne({ _id: sanitizeQueryInput(_id) })
      .then(() =>
        res.status(200).json({ message: "Result deleted successfully!" })
      )
      .catch((error) => console.error(error));
  },
};
