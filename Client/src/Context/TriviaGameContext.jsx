import { createContext, useState, useEffect } from "react";
export const TriviaContext = createContext();
export default function TriviaContextProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentLevel, setCurrentLevel] = useState(0);
  const [question, setQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
      alert('Game Over!');
    }
  };
  const GetQuestion = async () => {
  
    try {
      const response = await fetch("https://finalprojectserver.onrender.com/api/triviaGame/",{
        method: "GET"
      }
  
      );
      if (response.ok) {
        const text = await response.json()
        setQuestion(text)
      } else {
        console.error("Failed to fetch questions. Status code:", response.status);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
   
  };
  const UpdateScore = async (id, score) => {
debugger
    try {
      let response = await fetch("https://finalprojectserver.onrender.com/api/admin/AddPoints/", {
        method: "POST",
        headers: {
          "Context-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          type: 1,
          score: score,
        }),
      });
      if (response.ok) {
        setCurrentLevel((prev) => prev+1);
      }
    } catch (error) {
      console.error(error)
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
    GetQuestion,
    UpdateScore,
  };

  return (
    <TriviaContext.Provider value={value}>{children}</TriviaContext.Provider>
  );
}
