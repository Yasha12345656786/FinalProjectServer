import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const TriviaContext = createContext();
export default function TriviaContextProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState(0);
  const [question, setQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [endGame, setEndGame] = useState(false);
  // const GetNextQuestion = async () => {
  //   try {
  //     let response = await fetch(
  //       `https://finalprojectserver.onrender.com/api/triviaGame/GetNextLevelBylvl/${currentLevel}`
  //     );
  //     if (response.ok) {
  //       let data = await response.json()
  //       setCurrentQuestion(data);
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };
  const GetNextQuestion = () => {
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Handle game completion logic here
      setEndGame(true);
      setQuestion(null);
      if(endGame){
        alert("Game Over! , Your Trivia Score Has Been Updated");

        navigate("/TriviaGameMenu");

      }

    }
  };
  const GetQuestion = async () => {
    try {
      const response = await fetch(
        "https://finalprojectserver.onrender.com/api/triviaGame/",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const text = await response.json();
        setQuestion(text);
      } else {
        console.error(
          "Failed to fetch questions. Status code:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };
  const UpdateScore = async (id, score) => {
console.log(endGame);   
 if (endGame === true) {
  debugger
      try {
        let response = await fetch(
          "https://finalprojectserver.onrender.com/api/admin/AddPoints/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, type: 1, score }),
          }
        );

        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setCurrentLevel((prev) => prev + 1);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("More Questions Left");
    }
  };
  useEffect(() => {
    GetQuestion();
  }, []);

  const value = {
    GetNextQuestion,
    currentQuestion,
    currentQuestionIndex,
    question,
    points,
    setPoints,
    GetQuestion,
    UpdateScore,
    setCurrentQuestionIndex
  };

  return (
    <TriviaContext.Provider value={value}>{children}</TriviaContext.Provider>
  );
}
