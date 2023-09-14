import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AppHeader() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setLogin(false);
  });
  return (
    <>
      <h1>KenDvoasdasdrim</h1>
      <nav>
        <ul>
          <>
            <li>
              <Link to="/memoryGameMenu">Measdmsssory Game</Link>
            </li>

            <li>
              <Link to="/TriviaGameMenu">Trivia Game</Link>
            </li>
          </>
        </ul>
      </nav>
    </>
  );
}
