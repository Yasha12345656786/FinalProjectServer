import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TriviaGameMenu() {

  return (
    <>
      <ul>
        <li>
          <Link to="/TriviaGameMenu/BeeQuestionTrivia">Trivia Game</Link>
        </li>
        <li>
          <Link to="/TriviaGameLeaderboard">Leaderboard</Link>
        </li>
      </ul>
    </>
  );
}
