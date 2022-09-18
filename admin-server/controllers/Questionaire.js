const Questionaire = require("../models/Questionaire");
const { sanitizeQueryInput } = require("../utils/QuerySanitizer");

module.exports = {
  getQuestionaireController: (req, res) => {
    Questionaire.find().populate('fixtureId')
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => console.error(error));
  },
  newQuestionaireController: (req, res) => {
    const {
      fixtureId,
      questionaireType,
      questionairePrice,
      questionaires,
      poolType,
    } = req.body;

    const newQuestionaire = Questionaire.create({
      fixtureId,
      questionaireType,
      questionairePrice,
      questionaires,
      poolType,
    });

    Promise.all([newQuestionaire])
      .then(() => {
        res
          .status(200)
          .json({ message: "New Questionaire created successfully!" });
      })
      .catch((err) => console.error(err));
  },
  updateQuestionaireController: (req, res) => {
    const { _id } = req.body;

    const {
        fixtureId,
        questionaireType,
        questionairePrice,
        questionaires,
        poolType,
      } = req.body;
      
    const tempQuestionaire = Questionaire.findOne({
      _id: sanitizeQueryInput(_id),
    });

    Questionaire.updateOne(
      { _id: sanitizeQueryInput(_id) },
      {
        $set: {
          fixtureId: fixtureId || tempQuestionaire.fixtureId,
          questionaireType:
            questionaireType || tempQuestionaire.questionaireType,
          questionairePrice:
            questionairePrice || tempQuestionaire.questionairePrice,
          questionaires: questionaires || tempQuestionaire.questionaires,
          poolType: poolType || tempQuestionaire.poolType,
        },
      }
    )
      .then(() =>
        res.status(200).json({ message: "Questionaire updated successfully!" })
      )
      .catch((err) => console.error(err));
  },
  deleteQuestionaireController: (req, res) => {
    const { _id } = req.body;

    Questionaire.deleteOne({ _id: sanitizeQueryInput(_id) })
      .then(() =>
        res.status(200).json({ message: "Questionaire deleted successfully!" })
      )
      .catch((err) => console.error(err));
  },
};
