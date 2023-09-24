import React, { useContext, useState, useEffect } from "react";
import { TriviaContext } from "../Context/TriviaGameContext";
import { AdminContext } from "../Context/AdminContext";

export default function TriviaGame() {
//   const { currentQuestion, UpdateScore, question, GetQuestion } = useContext(TriviaContext);
//   const { admin } = useContext(AdminContext);
  
  
//   const AnswerPressed = (answer) => {
//     if (!answer.correct) {
//       UpdateScore(admin._id, 0);
//     } else {
//       UpdateScore(admin._id, answer.points);
//     }
//   };
//   console.log(currentQuestion);
//   useEffect(() => {
//     GetQuestion();
// }, []);
// console.log("sadds",question);
  // function renderContent() {
  //   return (
  //     <>
  //       {" "}
  //       <h3>{currentQuestion?.lvl}</h3>
  //       <h3>{admin.triviaScore}</h3>
  //       <h1>{currentQuestion?.q}</h1>
  //       <div>
  //         {currentQuestion?.Answers?.map((answer, index) => {
  //           console.log(answer);
  //           return (
  //             <button key={index} onProgress={() => AnswerPressed(answer)}>
  //               <h5>{answer.value}</h5>
  //             </button>
  //           );
  //         })}
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div>TriviaGame</div>
      {/* {!currentQuestion.lvl ? <div>loading</div> : renderContent()} */}
    </>
  );
}
