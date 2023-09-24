import { createContext, useState, useEffect } from "react";
export const TriviaContext = createContext();
export default function TriviaContextProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentLevel, setCurrentLevel] = useState(0);
  const [question, setQuestion] = useState([]);

  const GetNextQuestion = async () => {
    try {
      let response = await fetch(
        `/api/triviaGame/GetNextLevelBylvl/${currentLevel}`
      );
      if (response.ok) {
        let data = await response.json();
        setCurrentQuestion(data);
      }
    } catch (error) {}
  };
  const GetQuestion = async () => {
    debugger;
    try {
      await fetch("/api/triviaGame/getAllQuestions").then((response) => {
        return setQuestion(response);
      });
    } catch (error) {
      console.error(error);
    }
  };
  console.log(question);

  const UpdateScore = async (id, score) => {
    try {
      let response = await fetch("/api/admin/AddPoints", {
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
        setCurrentLevel((prev) => +1);
      }
    } catch (error) {}
  };
  useEffect(() => {
    GetNextQuestion();
    //GetNextAnswers();
  }, [currentLevel]);

  const value = {
    currentQuestion,
    question,
    GetQuestion,
    UpdateScore,
  };

  return (
    <TriviaContext.Provider value={value}>{children}</TriviaContext.Provider>
  );
}
