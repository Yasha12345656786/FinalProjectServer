import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';

export default function AppHeader() {
  const [login,setLogin]=useState(true)
  useEffect(()=>{
    setLogin(false)
  })
  return (
  <>
    <h1>KenDvorim</h1>
    <nav>
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
      {login&& (
        <>
            <li>
              <Link to="/memoryGameMenu">Measdmory Game</Link>
            </li>

            <li>
              <Link to="/TriviaGameMenu">Trivia Game</Link>
            </li>
            </>
     ) }
        </ul>
    </nav>
    </>
  )
}
