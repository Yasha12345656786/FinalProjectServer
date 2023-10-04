import React, { useContext, useState, useEffect } from "react";
import { TriviaContext } from "../Context/TriviaGameContext";
import { AdminContext } from "../Context/AdminContext";
import { useNavigate } from "react-router-dom";

export default function BeeQuestionTrivia() {
  const navigate = useNavigate();
  const {
    question,
    currentQuestionIndex,
    GetNextQuestion,
    UpdateScore,
    setCurrentQuestionIndex,
    points,
    setPoints,
  } = useContext(TriviaContext);
  const [id, setId] = useState([]);
  const { admin, GetAdminById } = useContext(AdminContext);

  const [color, setColor] = useState();
  const adminID = localStorage.getItem("admin");

  const currentQuestion = question ? question[currentQuestionIndex] : null;

  useEffect(() => {
    setId(JSON.parse(adminID));
  }, []);
  const quitGame = () => {
    setCurrentQuestionIndex(0);
    setPoints(0);
    navigate("/TriviaGameMenu");
  };
  const [selectedOptionIndex, setSelectdOptionIndex] = useState(null);

  const handleNextClick = (selecteAnwer) => {
    setSelectdOptionIndex(selecteAnwer);

    if (!currentQuestion) {
      return;
    }

    // const correctAnswer = currentQuestion.Answers.find((answer) => answer.correct);
    const correctAnswer = currentQuestion.Answers[selecteAnwer];
    console.log("dd",correctAnswer);
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

      GetNextQuestion();
      setSelectdOptionIndex(null);
  
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
      <button onClick={quitGame}>Quit Game</button>
      <button>Edit</button>
    </>
  );
}
