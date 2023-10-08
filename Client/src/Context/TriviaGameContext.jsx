import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const TriviaContext = createContext();
export default function TriviaContextProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState(0);
  const [question, setQuestion] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [id, setId] = useState([]);
  const [selectCorrectAnswer, setSelectCorrectAnswer] = useState(null);

  const GetNextQuestion = () => {
    console.log(question[currentQuestionIndex]?.points || 0);
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectCorrectAnswer(null);
    } else {
      // Handle game completion logic here
      const confirmResult = window.confirm(
        "Game Over! , Your Trivia Score Has Been Updated"
      );
      debugger;
      if (confirmResult) {
        const totalPoints = points + question[currentQuestionIndex]?.points;
        setPoints(totalPoints);
        UpdateScore(id._id, totalPoints);

        setCurrentQuestionIndex(0);
        setPoints(0);

        setQuestion(0);
        setTimeout(() => {
          console.log(currentQuestionIndex);
          navigate("/TriviaGameMenu");
        }, 2000);
        // window.location.reload();
      } else {
        setCurrentQuestionIndex(0);
        setPoints(0);

        setQuestion(0);
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
  };
  const AddLevel = async (level) => {
    debugger;
    try {
      let response = await fetch(
        "https://finalprojectserver.onrender.com/api/triviaGame/AddLevel",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            level,
          }),
        }
      );
      if (response.ok) {
        let data = await response.json();
        setId(data.insertedId);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };
  const EditLevel = async (lvl, q, Answers, points) => {
    try {
      let response = await fetch(
        `https://finalprojectserver.onrender.com/api/triviaGame/EditLevelByID/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            lvl,
            q,
            Answers,
            points,
          }),
        }
      );
      if (response.ok) {
        let data = await response.json();
        setLvl(data);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
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
    id,
    setId,
    setPoints,
    GetQuestion,
    UpdateScore,
    setCurrentQuestionIndex,
    selectCorrectAnswer,
    setSelectCorrectAnswer,
    AddLevel,
    EditLevel,
  };

  return (
    <TriviaContext.Provider value={value}>{children}</TriviaContext.Provider>
  );
}
