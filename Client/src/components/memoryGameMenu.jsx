import React from 'react'
import { Link } from 'react-router-dom'

export default function MemoryGameMenu() {
  return (
    <>
      <ul>
        <li>
            <Link to="/MemoryGame">Memory Game</Link>
        </li>
        <li>
            <Link to="/MemoryGameLeaderBoard">Leaderboard</Link>
        </li>
      </ul>
    </>
  )
}
