import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Login from './pages/Login';
import AppHeader from './components/AppHeader';

export default function App() {
  return (
 <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Login/>}/>
  </Routes>
  </BrowserRouter>
 </>
  )
}
