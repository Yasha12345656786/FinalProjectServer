import React, { useContext, useState, useEffect } from "react";
import { TriviaContext } from "../Context/TriviaGameContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export default function BeeQuestionTrivia() {
  const [lvl, SetLevel] = useState(null);
  const [q, SetQuestion] = useState("");
  const [Answers, SetAnswers] = useState(["", "", "", ""]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const navigate = useNavigate();
  const {
    question,
    currentQuestionIndex,
    GetNextQuestion,
    setCurrentQuestionIndex,
    points,
    setPoints,
    GetQuestion,
    setId,
    selectCorrectAnswer,
    setSelectCorrectAnswer,
    EditLevel,
  } = useContext(TriviaContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const adminID = localStorage.getItem("admin");
  const currentQuestion = question ? question[currentQuestionIndex] : null;

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
      setPoints(points + currentQuestion?.points);
    } else {
      console.log("error");
    }

    setTimeout(() => {
      GetNextQuestion();
      setSelectdOptionIndex(null);
    }, 1500);
  };
  const handleEdit = (e) => {
    e.preventDefault();

    const newQuestion = {
      lvl,
      q,
      Answers: Answers.map((choice, index) => ({
        value: choice,
        correct: index === correctAnswerIndex,
      })),
      points,
    };
    try {
      EditLevel(
        currentQuestion._id,
        newQuestion.lvl,
        newQuestion.q,
        newQuestion.Answers,
        newQuestion.points
      );
      setPoints(0);
      
    } catch (error) {
      console.error(error);
    }
  };


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
        <button
          onClick={quitGame}
          className="answerButton"
          style={{
            backgroundColor: "#007bff",
          }}
        >
          Quit Game
        </button>
        <button onClick={handleShow}>Edit</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            style={{
              display: "flex",

              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleEdit}
          >
            <label>
              Edit Level:
              <input
                type="number"
                placeholder={currentQuestion?.lvl}
                onChange={(e) => SetLevel(parseInt(e.target.value))}
                required
              />
            </label>
            <label
              style={{
                textAlign: "left",
              }}
            >
              Question:
            </label>
            <label>
              <textarea
                type="text"
                cols="30"
                rows="4"
                placeholder={currentQuestion?.q}
                required
                onChange={(event) => SetQuestion(event.target.value)}
                className="inputStyle"
              />
            </label>
            <label>
              Answers :
              {currentQuestion?.Answers?.map((choice, index) => {
                console.log(choice?.value);
                return (
                  <div key={index}>
                    <label>
                      <input
                        type="text"
                        placeholder={(choice?.value).toString()}
                        onChange={(e) => {
                          const newChoise = [...Answers];
                          newChoise[index] = e.target.value;
                          SetAnswers(newChoise);
                        }}
                        required
                      />
                    </label>
                    <label>
                      Corrent Answer:
                      <input
                        type="radio"
                        value={choice?.correct}
                        checked={correctAnswerIndex === index}
                        onChange={() => setCorrectAnswerIndex(index)}
                      />
                    </label>
                  </div>
                );
              })}
            </label>
            <label>
              points:
              <input
                type="number"
                placeholder={currentQuestion?.points}
                onChange={(e) => setPoints(parseInt(e.target.value))}
              />
            </label>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose} type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
