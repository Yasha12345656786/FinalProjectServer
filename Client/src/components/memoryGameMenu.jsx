import React from 'react'
import { Link } from 'react-router-dom'

export default function memoryGameMenu() {
  return (
    <>
      <ul>
        <li>
            <Link to="/memoryGame">Memory Game</Link>
        </li>
        <li>
            <Link to="/MemoryLeaderBoard">Leaderboard</Link>
        </li>
      </ul>
    </>
  )
}
