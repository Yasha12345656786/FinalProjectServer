import React from 'react'
import {Link} from 'react-router-dom';

export default function AppHeader() {
  return (
  <>
    <h1>KenDvorim</h1>
    <nav>
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>

            <li>
              <Link to="/memoryGameMenu">Memory Game</Link>
            </li>

            <li>
              <Link to="/TriviaGameMenu">Trivia Game</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}
