import React, { useContext, useState, useEffect } from "react";
import { TriviaContext } from "../Context/TriviaGameContext";
import { AdminContext } from "../Context/AdminContext";

export default function BeeQuestionTrivia() {
  const { question, currentQuestionIndex, GetNextQuestion, UpdateScore } =
    useContext(TriviaContext);
  const [id, setId] = useState([]);
  const { admin, GetAdminById } = useContext(AdminContext);
  const [points, setPoints] = useState(0);
  const [color, setColor] = useState();
  const adminID = localStorage.getItem("admin");

  const currentQuestion = question ? question[currentQuestionIndex] : null;

  useEffect(() => {
    setId(JSON.parse(adminID));
  }, []);
  const [selectedOptionIndex, setSelectdOptionIndex] = useState(null);

  const handleNextClick = (selecteAnwer) => {
    setSelectdOptionIndex(selecteAnwer);

    if (!currentQuestion) {
      return;
    }

    // const correctAnswer = currentQuestion.Answers.find((answer) => answer.correct);
    const correctAnswer = currentQuestion.Answers[selecteAnwer];
    if (correctAnswer && correctAnswer.correct) {
      setColor("green");

      UpdateScore(id._id, currentQuestion.points);
      setPoints(points + currentQuestion.points);
    } else {
      document
        .querySelector(`button[data-index]="${correctAnswer}`)
        .classList.remove("correct");
      document
        .querySelector(`button[data-index]="${correctAnswer}`)
        .classList.add("incorrect");

      console.error("error");
      setColor("red");
    }
    setTimeout(() => {
      GetNextQuestion();
      setSelectdOptionIndex(null);
    }, 3000);
  };

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
                onClick={() => {
                  handleNextClick(index);
                }}
                className={
                  selectedOptionIndex === index
                    ? "selected-option"
                    : selectedOptionIndex !== null && answer.correct
                    ? "correct"
                    : ""
                }
              >
                {answer.value}
              </button>
            ))}
          </ul>
          {/* <button onClick={handleNextClick}>Next</button> */}
        </div>
      ) : (
        <p>Loading.....</p>
      )}
      {/* {renderOptions()}

      {!currentQuestion.lvl ? <div>loading</div> :  renderQuestion()} */}
    </>
  );
}
