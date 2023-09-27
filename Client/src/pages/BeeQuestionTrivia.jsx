import React, { useContext, useState, useEffect } from "react";
import { TriviaContext } from "../Context/TriviaGameContext";
import { AdminContext } from "../Context/AdminContext";

export default function BeeQuestionTrivia() {
  const { question, currentQuestionIndex, GetNextQuestion ,UpdateScore} = useContext(
    TriviaContext
  )

  const [selectedOptionIndex, setSelectdOptionIndex] = useState(null);
const currentQuestion=question[currentQuestionIndex]

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
       UpdateScore(currentQuestion._id,currentQuestion.points)
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
      {currentQuestion ? (
        <div>
          <p>{currentQuestion.q}</p>
          <ul>
            {currentQuestion.Answers?.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
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
