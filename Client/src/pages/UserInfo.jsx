import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../Context/AdminContext";
import { Link, useNavigate } from "react-router-dom";
export default function UserInfo() {
  const navigate = useNavigate();
  const { admin, GetAdminByEmail, dataAdmin, Logout } =
    useContext(AdminContext);

  const [emailAdmin, setEmailAdmin] = useState("");
  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem("admin"));

    console.log(adminData.email);
    setEmailAdmin(adminData.email);
  }, []);
  const handleLogout = () => {
    Logout();
    localStorage.removeItem("admin");
  };
  useEffect(() => {
    GetAdminByEmail(emailAdmin);
  }, [emailAdmin]);
  return (
    <>
      <div className="containerStyle">
        <h1 className="headingStyle"> Hello {admin?.admin?.email}</h1>
        <h3 className="subHeadingStyle">
          Trivia Score: {dataAdmin?.triviaScore}
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button className="dashboardButtonStyle">
            <Link to={"/TriviaGameMenu"}>Trivia Game Menu</Link>
          </button>
          <button className="dashboardButtonStyle">
            <Link to={"/BeeInfoPage"}>Bee Info Page</Link>
          </button>

          <button onClick={handleLogout} className="logoutButtonStyle">
            LogOut
          </button>
        </div>
      </div>
    </>
  );
}
