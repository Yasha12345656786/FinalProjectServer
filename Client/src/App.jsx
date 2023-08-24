import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AppHeader from './components/AppHeader';
import TriviaGameMenu from './components/TriviaGameMenu'
import TriviaGame from './pages/TriviaGame';
import TriviaContextProvider from './Context/TriviaGameContext';
import AdminContextProvider from './Context/AdminContext';
export default function App() {
  return (
    <>
        <AdminContextProvider>
          <TriviaContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="TriviaGameMenu" element={<TriviaGameMenu />} />
              <Route path="/TriviaGame" element={<TriviaGame />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </BrowserRouter>      
        </TriviaContextProvider>
      </AdminContextProvider>
    </>
  )
}
