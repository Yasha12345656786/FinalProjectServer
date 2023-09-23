import { useState } from "react";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import TriviaGameMenu from "./components/triviaGameMenu";
// import TriviaGame from './pages/TriviaGame';
import ForgotPassword from "./pages/ForgotPassword";
import ForgotUsername from "./pages/ForgotUsername";
import TriviaContextProvider from "./Context/TriviaGameContext";
import AdminContextProvider from "./Context/AdminContext";
import BeeInfoPage from "./pages/BeeInfoPage";
import MemoryGameLeaderBoard from "./pages/MemoryGameLeaderBoard";
import PlayerContext from "./Context/PlayerContext";
import UserInfo from "./pages/UserInfo";
export default function App() {
  return (
    <>
      <AdminContextProvider>
        <TriviaContextProvider>
          <PlayerContext>
            <BrowserRouter>
              <Routes>
                <Route path="/BeeInfoPage" element={<BeeInfoPage />}></Route>
                <Route path="TriviaGameMenu" element={<TriviaGameMenu />} />
                {/* <Route path="/TriviaGame" element={<TriviaGame/>} /> */}
                <Route
                  path="/PlayerForgotPassword"
                  element={<ForgotPassword />}
                />
                <Route
                  path="/PlayerForgotUsername"
                  element={<ForgotUsername />}
                />
                <Route path="/" element={<Login />} />
                <Route
                  path="/MemoryGameLeaderBoard"
                  element={<MemoryGameLeaderBoard />}
                />

                <Route path="/login" element={<Login />} />
                <Route path="/UserInfo" element={<UserInfo />} />
              </Routes>
            </BrowserRouter>
          </PlayerContext>
        </TriviaContextProvider>
      </AdminContextProvider>
    </>
  );
}
