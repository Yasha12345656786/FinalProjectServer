import React from 'react'

export default function TriviaGameMenu() {
  return (
    <div>
        <h1>Trivia Game Menu</h1>

        <button><Link to={'/TriviaGame'}>New Game</Link></button>
        <button><Link to={'/TriviaGameLeaderboard'}>Trivia Game Leaderboard</Link></button>
        </div>
  )
}
