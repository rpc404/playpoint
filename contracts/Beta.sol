// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract Beta{
    constructor(){
        totalVolume = 0;
        totalPredictions = 0;
        admin = msg.sender;
    }

    /**
    * @dev universal data
    */
    uint private totalVolume;
    uint private totalPredictions;
    address private admin;

    function getUniversalData() view public returns (uint, uint, address){
        return (totalVolume, totalPredictions, admin);
    }

    struct gameInfo{
        uint8 questionaireSize;
        uint8 poolSize;
    }

    // match id => returns game info
    mapping (uint => gameInfo) public gameInformations;
    // match id => question number => returns question
    mapping (uint => mapping (uint8 => string)) public questions;
    // match id => question number => returns results
    mapping (uint => mapping (uint8 => string)) public results;
    // user address => match id => question number => returns results
    mapping (address => mapping (uint => mapping (uint8 => string))) public predictions;

    modifier _onlyOwner(){
        require(msg.sender == admin, "Only owner can modify this function!");
        _;
    }

    // Set Questions
    function setQuestion(uint _questionId, uint8 _poolSize,uint8 _questionaireSize, string[] memory _questions) _onlyOwner public {
        gameInfo memory game = gameInformations[_questionId];
        game.questionaireSize = _questionaireSize;
        game.poolSize = _poolSize;
        
        uint8 i;
        for(i = 0;i < _questionaireSize; i++){
            questions[_questionId][i+1] = _questions[i];
        }
    }

    // Set Results
    /**
    * @dev winners will be calculated from the backend server using CRON Jobs
    */
    function setResult(uint _questionId, string[] memory _answers) _onlyOwner public{
        uint8 tempQuestionaireSize = gameInformations[_questionId].questionaireSize;

        uint8 i;
        for(i = 0;i < tempQuestionaireSize; i++){
            results[_questionId][i+1] = _answers[i];
        }
    }

    // Predict Function
    /**
    * @dev Modifier is needed for the financial calculations
    */
    function predict(uint _questionId, string[] memory _answers) public{
        uint8 tempQuestionaireSize = gameInformations[_questionId].questionaireSize;

        uint8 i;
        for(i = 0;i < tempQuestionaireSize; i++){
            predictions[msg.sender][_questionId][i+1] = _answers[i];
        }
    }
}