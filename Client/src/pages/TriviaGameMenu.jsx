import React from "react";
import { Link } from "react-router-dom";

export default function TriviaGameMenu() {
  return (
    <>
      <ul>
        <li>
          <Link to="/TriviaGameMenu/TriviaGame">Trivia Game</Link>
        </li>
        <li>
          <Link to="/TriviaGameLeaderoard">Leaderboard</Link>
        </li>
      </ul>
    </>
  );
}
