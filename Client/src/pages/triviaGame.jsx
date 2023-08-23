import React, { useContext, useState, useEffect }  from 'react';
import { TriviaContext } from '../Context/TriviaGameContext';
import {AdminContext} from '../Context/AdminContext';


export default function triviaGame() {
  const {currentQuestion,UpdateScore}= useContext(TriviaContext);
  const {admin} = useContext(AdminContext);

  const AnswerPressed = (answer)=>{
    if (!answer.correct) {
      UpdateScore(admin._id,0);
    }
    else{
      UpdateScore(admin._id,answer.points)
    }
  }
  return (
    <>
    <div>triviaGame</div>

    <p>{currentQuestion.lvl}</p>
    <p>{admin.triviaScore}</p>

     <h1>
      {currentQuestion.q}
     </h1>

     <div>
      {
        currentQuestion.Answers.map((answer,index)=>{
          <button key ={index} onProgress={()=> AnswerPressed(answer)}>
          <h5>
            {answer.value}
          </h5>
          </button>

        })

      }
     </div>
     </>
  )
}
