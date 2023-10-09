import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import Login from "./pages/Login";
import TriviaGameMenu from "./pages/TriviaGameMenu";
import BeeQuestionTrivia from "./pages/BeeQuestionTrivia.jsx";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotUsername from "./pages/ForgotUsername";
import TriviaContextProvider from "./Context/TriviaGameContext";
import AdminContextProvider from "./Context/AdminContext";
import BeeInfoPage from "./pages/BeeInfoPage";
import MemoryGameLeaderBoard from "./pages/MemoryGameLeaderBoard";
import TriviaGameLeaderBoard from "./pages/TriviaGameLeaderBoard";
import PlayerContext from "./Context/PlayerContext";
import UserInfo from "./pages/UserInfo";
import AdminForgotPass from "./pages/AdminForgotPass";
import MemoryGameMenu from "./pages/MemoryGameMenu";
import logo from "./assets/logo.png";
import AdminResetPass from "./pages/AdminResetPass";
import EditLevelModal from "./components/EditLevelModal";
import AddLevel from "./pages/AddLevel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <AdminContextProvider>
        <TriviaContextProvider>
          <PlayerContext>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Link to={"/UserInfo"}>
                <img
                  src={logo}
                  style={{
                    height: 100,
                    width: 100,
                  }}
                />
              </Link>
            </div>
            <Routes>
              <Route path="/BeeInfoPage" element={<BeeInfoPage />}></Route>
              <Route path="TriviaGameMenu" element={<TriviaGameMenu />} />

              <Route
                path="/PlayerForgotPassword"
                element={<ForgotPassword />}
              />
              <Route
                path="/PlayerForgotUsername"
                element={<ForgotUsername />}
              />
              <Route path="/" element={<Login />} />
              <Route path="/MemoryGameMenu" element={<MemoryGameMenu />} />
              <Route path="/EditLevelModal" element={<EditLevelModal />} />
              <Route path="/AddLevel" element={<AddLevel />} />
              <Route
                path="/TriviaGameMenu/BeeQuestionTrivia"
                element={<BeeQuestionTrivia />}
              />

              <Route path="/TriviaGameMenu" element={<TriviaGameMenu />} />
              <Route path="/BeeInfoPage" element={<BeeInfoPage />} />

              <Route
                path="/MemoryGameLeaderBoard"
                element={<MemoryGameLeaderBoard />}
              />
              <Route
                path="/TriviaGameLeaderBoard"
                element={<TriviaGameLeaderBoard />}
              />
              <Route
                path="/AdminForgotPassword"
                element={<AdminForgotPass />}
              />
              <Route path="/AdminResetPassword" element={<AdminResetPass />} />

              <Route path="/login" element={<Login />} />
              <Route path="/UserInfo" element={<UserInfo />} />
            </Routes>
          </PlayerContext>
        </TriviaContextProvider>
      </AdminContextProvider>
    </>
  );
}
