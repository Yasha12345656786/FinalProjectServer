import React, { useContext, useState, useEffect } from "react";
import { TriviaContext } from "../Context/TriviaGameContext";
import { AdminContext } from "../Context/AdminContext";
import { useNavigate } from "react-router-dom";
// import {EditLevelModal} from "../components/EditLevelModal";
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
    if (correctAnswer && correctAnswer.correct) {
      // UpdateScore(id._id, currentQuestion?.points);
      console.log("s", selectedOptionIndex);
      setPoints(points + currentQuestion?.points);
    } else {
      console.log("error");
    }
    // const correctAnswer = currentQuestion.Answers.find((answer) => answer.correct);

    setTimeout(() => {
      GetNextQuestion();
      setSelectdOptionIndex(null);
    }, 1500);
  };

  //Render the question

  return (
    <>
      <div className="triviaGameContainer">
        <div
          style={{
            fontSize: "2em",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "1.5em",
            }}
          >
            Trivia game
          </h1>
          <p
            style={{
              fontSize: "1em",
            }}
          >
            Score:{points}
          </p>
        </div>
        <hr></hr>
        {currentQuestion ? (
          <div>
            <p
              style={{
                fontSize: "2em",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {currentQuestion.q}
            </p>
            <div
              style={{
                width: "100%",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                {currentQuestion.Answers?.map((answer, index) => {
                  console.log("s", selectCorrectAnswer);
                  console.log(answer.correct);

                  const buttonStyle = {
                    backgroundColor: "#007bff",
                  };
                  if (selectedOptionIndex !== null) {
                    if (selectedOptionIndex === index) {
                      if (answer.correct) {
                        buttonStyle.backgroundColor = "green";
                      } else buttonStyle.backgroundColor = "red";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => {
                        handleNextClick(index);
                      }}
                      style={buttonStyle}
                      className="answerButton "
                    >
                      {answer.value}
                    </button>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          <p>Loading.....</p>
        )}
        {/* {renderOptions()}

      {!currentQuestion.lvl ? <div>loading</div> :  renderQuestion()} */}
        <button
          onClick={quitGame}
          className="answerButton"
          style={{
            backgroundColor: "#007bff",
          }}
        >
          Quit Game
        </button>
        <button
          onClick={navigate("/EditLevelModal")}
          className="answerButton"
          style={{
            backgroundColor: "#007bff",
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
}
