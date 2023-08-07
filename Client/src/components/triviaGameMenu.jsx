import React from 'react'

export default function triviaGameMenu() {
  return (
    <>
      <ul>
        <li>
            <Link to="/triviaGame">Trivia Game</Link>
        </li>
        <li>
            <Link to="/TriviaLeaderoard">Leaderboard</Link>
        </li>
      </ul>
    </>
  )
}
