import React from 'react'

export default function MemoryGameMenu() {
  return (
    <div>
        <h1>Memory Game Menu</h1>

        <button><Link to={'/MemoryGame'}>New Game</Link></button>
        <button><Link to={'/MemoryGameLeaderboard'}>Memory Game Leaderboard</Link></button>
        </div>
  )
}
