import { Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

function NewQuestionaires({ setisHome, setAction, getQuestions }) {

    const [FixturesItems, setFixturesItems] = React.useState([])
    const [noInputs, setnoInputs] = React.useState([]);
    const [newQuestionaires, setnewQuestionaires] = React.useState({
        fixtureId: "",
        questionaireType: 3,
        questionairePrice: "",
        poolType: "unlimited",
        questionaires: []
    })
    const handleBack = () => {
        setisHome(true);
        setAction("");
        getQuestions();
    }

    const getFixtures = () => {
        axios
            .get(`${import.meta.env.VITE_SERVER_URI}api/fixture/get-fixtures`)
            .then((res) => {
                setFixturesItems(res.data?.fixtures)
                setnewQuestionaires({
                    ...newQuestionaires,
                    fixtureId: res.data?.fixtures[0]._id
                })
            })
            .catch((err) => console.error(err));
    }

    React.useEffect(() => {
        getFixtures();
    }, []);


    const handleResetInputs = () => {
        setnewQuestionaires({
            fixtureId: "",
            questionaireType: 3,
            questionairePrice: "",
            poolType: "unlimited",
            questionaires: []
        })
    }
    const handleQuestion = (index, value) => {
        const ques = newQuestionaires.questionaires;
        ques[index] = { question: value };
        setnewQuestionaires({
            ...newQuestionaires,
            questionaires: ques
        })
    }

    const handleNewQuestionaire = (e) => {
        e.preventDefault()
        axios
            .post(`${import.meta.env.VITE_SERVER_URI}api/questionaire/new-questionaire`, newQuestionaires)
            .then((res) => {
                if (res.status === 200) {
                    handleBack();
                }
            })
            .catch((err) => console.error(err));
    }


    React.useEffect(() => {
        let arr = []
        for (let index = 1; index <= newQuestionaires.questionaireType; index++) {
            arr.push(index);
        }
        setnoInputs(arr);
    }, [newQuestionaires.questionaireType])

    return (
        <div className='newQuestionaires__container'>
            <Button onClick={() => handleBack()} >BACK</Button>
            <form onSubmit={handleNewQuestionaire}>
                <h3>New Questionaires</h3>
                <select
                    value={newQuestionaires.fixtureId}
                    onChange={e => setnewQuestionaires({ ...newQuestionaires, fixtureId: e.target.value })}>
                    {FixturesItems.map((fixtures, key) =>
                        <option value={fixtures._id} key={key}>{fixtures.HomeTeam} vs {fixtures.AwayTeam}</option>)}
                </select>
                <input type="number"
                    placeholder='Questionaire Price'
                    value={newQuestionaires.questionairePrice}
                    onChange={e => setnewQuestionaires({ ...newQuestionaires, questionairePrice: e.target.value })}
                />

                <select
                    onChange={e => setnewQuestionaires({ ...newQuestionaires, questionaireType: e.target.value })}
                    value={newQuestionaires.questionaireType}
                >
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <select
                    value={newQuestionaires.poolType}
                    onChange={e => setnewQuestionaires({ ...newQuestionaires, poolType: e.target.value })}
                >
                    <option value="unlimited">Unlimited</option>
                    <option value="duo">Duo</option>
                    <option value="trio">Trio</option>
                    <option value="nonet">Nonet</option>
                </select>
                {
                    noInputs.map((i, index) =>
                        <input
                            type="text"
                            key={index}
                            placeholder={"Question " + (index + 1)}
                            value={newQuestionaires.questionaires[index]?.question || ""}
                            onChange={
                                e => handleQuestion(index, e.target.value)
                            } />)
                }
                <div className="buttons">
                    <Button type="submit">Submit</Button>
                    <Button onClick={() => handleResetInputs()}>Reset</Button>
                </div>
            </form>
        </div>
    )
}

export default NewQuestionaires