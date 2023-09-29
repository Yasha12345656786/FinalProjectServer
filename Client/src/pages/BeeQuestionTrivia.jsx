import React, { useContext, useState, useEffect } from "react";
import { TriviaContext } from "../Context/TriviaGameContext";
import { AdminContext } from "../Context/AdminContext";

export default function BeeQuestionTrivia() {
  const { question, currentQuestionIndex, GetNextQuestion ,UpdateScore} = useContext(
    TriviaContext
  )
  const [id,setId]=useState([]);
  console.log(question);
const {admin,GetAdminById}=useContext(AdminContext);
const [points,setPoints]=useState(0)
const adminID=localStorage.getItem('admin')

useEffect(()=>{
  setId(JSON.parse(adminID))
},[])
  console.log();
  const [selectedOptionIndex, setSelectdOptionIndex] = useState(null);
const currentQuestion=question[currentQuestionIndex]
console.log(currentQuestion.points);
  const handleOptionSelect = (selecteAnwer) => {
    setSelectdOptionIndex(selecteAnwer);
  };


  const handleNextClick = () => {
  
    if(!currentQuestion){
      return
    }
    // const correctAnswer = currentQuestion.Answers.find((answer) => answer.correct);
    const correctAnswer = currentQuestion.Answers[selectedOptionIndex]
    if (correctAnswer  && correctAnswer.correct) {
       UpdateScore(id._id,currentQuestion.points)
       setPoints(points+currentQuestion.points)
     }else{
      console.error('eroor')
     }

    GetNextQuestion();
    setSelectdOptionIndex(null);
  }

  //Render the question

  return (
    <>
      <h1>Trivia game</h1>
      <p>Score:{points}</p>
      {currentQuestion ? (
        <div>
          <p>{currentQuestion.q}</p>
          <ul>
            {currentQuestion.Answers?.map((answer, index) => (
              <button
                key={index}
                onClick={() =>{ handleOptionSelect(index)}}
                className={
                  selectedOptionIndex === index
                    ? "selectd-option"
                    : selectedOptionIndex !== null && answer.correct
                    ? "current"
                    : ""
                }
              >
                {answer.value}
              </button>
            ))}
          </ul>
          <button onClick={handleNextClick}>Next</button>
        </div>
      ) : (
        <p>Loading.....</p>
      )}
      {/* {renderOptions()}

      {!currentQuestion.lvl ? <div>loading</div> :  renderQuestion()} */}
    </>
  );
}
