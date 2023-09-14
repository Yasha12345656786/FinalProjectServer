import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import TriviaGameMenu from './components/triviaGameMenu';
// import TriviaGame from './pages/TriviaGame';

import TriviaContextProvider from './Context/TriviaGameContext';
import AdminContextProvider from './Context/AdminContext';
import BeeInfoPage from './pages/BeeInfoPage';
export default function App() {
  return (
    <>
        <AdminContextProvider>
          <TriviaContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/BeeInfoPage" element={<BeeInfoPage/>}></Route>
              <Route path="TriviaGameMenu" element={<TriviaGameMenu />} />
              {/* <Route path="/TriviaGame" element={<TriviaGame/>} /> */}
              <Route path="/" element={<Login />} />
            </Routes>
          </BrowserRouter>      
        </TriviaContextProvider>
      </AdminContextProvider>
    </>
  )
}
