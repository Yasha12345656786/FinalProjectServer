import React from 'react'
import {Link} from 'react-router-dom';

export default function TriviaGameMenu() {
  return (
    <>
      <ul>
        <li>
            <Link to="/TriviaGame">Trivia Game</Link>
        </li>
        <li>
            <Link to="/TriviaLeaderoard">Leaderboard</Link>
        </li>
      </ul>
    </>
  )
}
