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
    selectCorrectAnswer,
    setSelectCorrectAnswer,
  } = useContext(TriviaContext);

  const { admin, GetAdminById } = useContext(AdminContext);

  const [color, setColor] = useState("");
  const adminID = localStorage.getItem("admin");

  const currentQuestion = question ? question[currentQuestionIndex] : null;
  console.log(question);
  console.log(currentQuestionIndex);

  useEffect(() => {
    setId(JSON.parse(adminID));
    GetQuestion();
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

    const correctAnswer = currentQuestion.Answers[selecteAnwer];
    console.log(correctAnswer);
    if (correctAnswer.correct) {
      console.log(selectedOptionIndex);

      setSelectCorrectAnswer(selecteAnwer);
    }
    // const correctAnswer = currentQuestion.Answers.find((answer) => answer.correct);

    setTimeout(() => {
      GetNextQuestion();
    }, 2500);
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
              {currentQuestion.Answers?.map((answer, index) => {
                debugger;
                // console.log("s", selectCorrectAnswer);
                console.log(
                  selectCorrectAnswer === index && answer.correct ? "yes" : "np"
                );
                return (
                  <button
                    key={index}
                    onClick={() => {
                      handleNextClick(index);
                    }}
                    className={
                      `answerButton ${
                        selectCorrectAnswer === index &&
                        (answer.correct ? "correct" : "incorrect")
                      }`
                      // "answerButton",{
                      // selectCorrectAnswer === index &&
                      //   (answer.correct ? "correct" : "incorrect"}),
                    }
                  >
                    {answer.value}
                  </button>
                );
              })}
            </ul>
          </div>
        ) : (
          <p>Loading.....</p>
        )}
        {/* {renderOptions()}

      {!currentQuestion.lvl ? <div>loading</div> :  renderQuestion()} */}
        <button onClick={quitGame} className="answerButton">
          Quit Game
        </button>
        <button className="answerButton">Edit</button>
      </div>
    </>
  );
}
