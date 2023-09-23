import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../Context/AdminContext";
import { Link, useNavigate } from "react-router-dom";
export default function UserInfo() {
  const navigate = useNavigate();
  const { admin, GetAdminByEmail, Logout } = useContext(AdminContext);

  const handleLogout = () => {
    Logout();
  };
  return (
    <>
      <div>
        <h1> Hello {admin?.admin?.email}</h1>

        <button> <Link to={'/AdminForgotPassword'}>Forgot Password</Link></button>

        <button><Link to={'/MemoryGameMenu'}>Memory Game Menu</Link></button>
        <button><Link to={'/TriviaGameMenu'}>Memory Game Menu</Link></button>

        <button onClick={handleLogout}>LogOut</button>
      </div>
    </>
  );
}
