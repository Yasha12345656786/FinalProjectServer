import React, { useContext, useState, useEffect } from "react";
import { TriviaContext } from "../Context/TriviaGameContext";
import { AdminContext } from "../Context/AdminContext";

export default function BeeQuestionTrivia() {
  const { currentQuestion, UpdateScore, question, GetQuestion } =
    useContext(TriviaContext);
  const { admin } = useContext(AdminContext);

  const handleAnswerClick = (selecteAnwer) => {
    //answer logic

  };
  useEffect(() => {
    GetQuestion();
  }, []);
  console.log("asdasd", question);

  //Render the question

  const renderQuestion = () => {
    return (
      <div>
        <h1> Trivia</h1>
        <p>{question[currentQuestion]?.q}</p>
        <p>
          Question {currentQuestion + 1}/{question.length}
        </p>

        <div> {renderOptions()}</div>
        <p> </p>
      </div>
    );
  };
  const renderOptions = () => {
    question[currentQuestion]?.Answers?.map((options, index) => (
      <button key={index} onClick={() => handleAnswerClick(options)}>
        {options}
      </button>
    ));
  };

  return (
    <>
      {/* {renderQuestion()} */}

      {/* {!currentQuestion.lvl ? <div>loading</div> : renderContent()} */}
    </>
  );
}
