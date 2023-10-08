import React from "react";
import { useContext, useState } from "react";
import { TriviaContext } from "../Context/TriviaGameContext";
export default function AddLevel() {
  const [lvl, SetLevel] = useState(1);
  const [q, SetQuestion] = useState("");
  const [Answers, SetAnswers] = useState(["", "", "", ""]);
  const [points, SetPoints] = useState(0);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const { AddLevel } = useContext(TriviaContext);

  const handleAddLevel = async (e) => {
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
      AddLevel({
        lvl,
        q,
        Answers: Answers.map((choice, index) => ({
          value: choice,
          correct: index === correctAnswerIndex,
        })),
        points,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Add Level</h1>

      <form
        onSubmit={handleAddLevel}
        style={{
          display: "flex",

          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label>
          Level:
          <input
            type="number"
            value={lvl}
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
            placeholder="question"
            required
            onChange={(event) => SetQuestion(event.target.value)}
            className="inputStyle"
          />
        </label>
        <label>
          Answers :
          {Answers.map((choice, index) => {
            return (
              <div key={index}>
                <label>
                  <input
                    type="text"
                    value={choice}
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
                    value={index}
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
            value={points}
            onChange={(e) => SetPoints(parseInt(e.target.value))}
            required
          />
        </label>
        <button type="submit">Add Level</button>
      </form>
    </div>
  );
}
