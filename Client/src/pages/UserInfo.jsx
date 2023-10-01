import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../Context/AdminContext";
import { Link, useNavigate } from "react-router-dom";
export default function UserInfo() {
  const navigate = useNavigate();
  const { admin, GetAdminByEmail, dataAdmin, Logout } =useContext(AdminContext);

  const handleLogout = () => {
    Logout();
  };
  useEffect(() => {
    GetAdminByEmail(admin?.admin?.email);
  }, []);
  return (
    <>
      <div>
        <h1> Hello {admin?.admin?.email}</h1>
        <h3>Trivia Score: {dataAdmin?.triviaScore}</h3>

        <button>
          {" "}
          <Link to={"/AdminForgotPassword"}>Forgot Password</Link>
        </button>

        <button>
          <Link to={"/MemoryGameMenu"}>Memory Game Menu</Link>
        </button>
        <button>
          <Link to={"/TriviaGameMenu"}>Trivia Game Menu</Link>
        </button>
        <button>
          <Link to={"/BeeInfoPage"}>Bee Info Page</Link>
        </button>

        <button onClick={handleLogout}>LogOut</button>
      </div>
    </>
  );
}
