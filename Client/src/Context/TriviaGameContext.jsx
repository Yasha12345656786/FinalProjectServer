import { createContext, useState, useEffect } from "react";
export const TriviaContext = createContext();
export default function TriviaContextProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentLevel, setCurrentLevel] = useState(0);
  const [question, setQuestion] = useState(null);

  const GetNextQuestion = async () => {
    try {
      let response = await fetch(
        `/api/triviaGame/GetNextLevelBylvl/${currentLevel}`
      );
      if (response.ok) {
        let data = await response.json().setCurrentQuestion(data);
      }
    } catch (error) {}
  };

  const GetQuestion = async () => {
    debugger
    try {
      const response = await fetch("/api/triviaGame/");
      if (response.ok) {
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          setQuestion(data); // Update the state with the fetched questions
        } catch (jsonError) {
          console.error("Error parsing JSON:", jsonError);
        }
      } else {
        console.error("Failed to fetch questions. Status code:", response.status);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
   
  };
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
