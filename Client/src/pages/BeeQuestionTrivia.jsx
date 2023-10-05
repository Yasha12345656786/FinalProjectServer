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
    id,
    GetQuestion,
    setId,
  } = useContext(TriviaContext);

  const { admin, GetAdminById } = useContext(AdminContext);

  const [color, setColor] = useState("");
  const adminID = localStorage.getItem("admin");

  const currentQuestion = question ? question[currentQuestionIndex] : null;
  console.log(question);
  console.log(currentQuestionIndex);

  useEffect(() => {
    setId(JSON.parse(adminID));
    GetQuestion()
 
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
    console.log("dd", correctAnswer);
    if (correctAnswer && correctAnswer.correct) {
      setColor("green");

      // UpdateScore(id._id, currentQuestion.points);

      setPoints(points + currentQuestion.points);
    } else {

      // console.log(1);
      // document
      //   .querySelector(`button[data-index]="${correctAnswer}`)
      //   .classList.remove("correct");
      //   console.log(2);
      document
        .querySelector(`button[data-index]="${correctAnswer}`)
        .classList.add("incorrect");
        console.log(3);

        setColor("red");
      console.error("error");
    }

    GetNextQuestion();
    setSelectdOptionIndex(null);
  };

  //Render the question

  return (
    <>
    <div className="triviaGameContainer">
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
                  setColor(color)
                  handleNextClick(index);
                }}
                className={
                  selectedOptionIndex === index
                    ? "selected-option"
                    : selectedOptionIndex !== null && answer.correct
                    ? "correct"
                    : "incorrect"
                }
              >
                {answer.value}
              </button>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading.....</p>
      )}
      {/* {renderOptions()}

      {!currentQuestion.lvl ? <div>loading</div> :  renderQuestion()} */}
      <button onClick={quitGame}>Quit Game</button>
      <button>Edit</button>
      </div>
    </>
  );
}
