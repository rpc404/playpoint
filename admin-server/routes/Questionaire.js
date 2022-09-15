const {
  getQuestionaireController,
  newQuestionaireController,
  updateQuestionaireController,
  deleteQuestionaireController,
} = require("../controllers/Questionaire");

const QuestionaireRouter = require("express").Router();

QuestionaireRouter.get("/get-questionaire", getQuestionaireController)
  .post("/new-questionaire", newQuestionaireController)
  .patch("/update-questionaire", updateQuestionaireController)
  .delete("/delete-questionaire", deleteQuestionaireController);

module.exports = QuestionaireRouter;
