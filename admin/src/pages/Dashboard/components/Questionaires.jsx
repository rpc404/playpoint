import { Button } from '@mui/material';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import NewQuestionaires from './NewQuestionaires';
const server = import.meta.env.VITE_SERVER_URI;

export default function Questionaires() {

  const [Questions, setQuestions] = useState([]);
  const [isHome, setisHome] = useState(true);
  const [action,setAction] = useState("")
  
  const getQuestions = ()=>{
    axios.get(server+"api/questionaire/get-questionaire").then(res=>{
      if(res.status==200){
        setQuestions(res.data)
      }
    })
  }
 
  const deleteItem = (id) => {
    axios(`${import.meta.env.VITE_SERVER_URI}api/questionaire/delete-questionaire`, {
      method: 'delete',
      data: { _id: id }
    })
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          getQuestions();
        }
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getQuestions();
  }, [])

  const handleAddItem = ()=>{
    setisHome(false)
    setAction("add-item")
  }
  
  return (
    <div className='questionaires__container'>
      {isHome && 
      <div className='home'>
       <div className="title">
            <h2>Questionaires - 10 Questionaires</h2>
            <div className="rightTitleBar">
              <Button onClick={() => handleAddItem()}>
                <i className="ri-menu-add-line"></i> Add Item
              </Button>
            </div>
          </div>
        {
          Questions && Questions.map((question,key)=>{
            return <div className='question__card' key={key}>
                <div className='card__header'>
                  <h2>
                    {question?.fixtureId?.HomeTeam} vs {question?.fixtureId?.AwayTeam}
                    </h2>
                    <p><i className="ri-map-pin-line"></i> {question?.fixtureId?.Location} </p>
                    <p><i className="ri-layout-masonry-line"></i> {question?.fixtureId?.Group}</p>
                    <Button variant='outlined' color='inherit'><i className="ri-edit-2-line"></i> Edit</Button>
                    <Button variant='outlined' color='inherit'onClick={()=>deleteItem(question._id)}><i className="ri-delete-bin-5-line"></i> Delete</Button>
                </div>
                <div className='card__body'>
                  <p>Pool Type: {question.poolType}</p>
                  <p>Questionaire Price: {question.questionairePrice}</p>
                  <p>Questionaire Type: {question.questionaireType}</p>
                  <h3>Questionaires</h3><hr/>
                  {
                    question?.questionaires && question.questionaires.map((ques,elkey)=>
                     <p key={elkey}> {elkey+1}. {ques.question}</p>
                    )
                  }
                </div>
            </div>
          })
        }
      </div>
      }

      {!isHome && 
        action==='add-item' &&
      <div>
        <NewQuestionaires setisHome={setisHome} setAction={setAction} getQuestions={getQuestions} />
      </div>
      }
    </div>
  )
}
