import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();
export default function AdminContextProvider({ children }) {
  const [admin, setAdmin] = useState({});
  const Login = async (email, password) => {
    try {
      let response = await fetch(
        `${import.meta.env.VITE_SERVER_PATH}/api/admin/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (response.ok) {
        let data = await response.json();
        setAdmin(data);
        return true;
      }
    } catch (error) {
      //setNotifcation("error has occured");
      //logService.send(error)
      console.error(error);
    }
  };
  const UpdateUsername = async (username) => {
    try {
      let response = await fetch("/api/admin/updateUsername", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      if (response.ok) {
        let data = await response.json();
        setAdmin(data);
      }
    } catch (error) {}
  };
  const UpdatePassword = async (password) => {
    try {
      let response = await fetch("/api/admin/updatePassword", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (response.ok) {
        let data = await response.json();
        setAdmin(data);
      }
    } catch (error) {}
  };
  const GetAdminById = async (id) => {
    try {
      let response = await fetch("/api/admin/getAdminById", {
        method: "GET",
        body: JSON.stringfy({ admin }),
      });
      if (response.ok) {
        let data = await response.json();
        setAdmin(data);
      }
    } catch (error) {}
  };
  const GetAdminByEmail =  async (email)=>{
    try {
      let response = await fetch(`https://finalprojectserver.onrender.com/api/admin//getAdminByEmail/${email}`);
      if (response.ok) {
        let data = await response.json();
        return data;
      }else return null;
    } catch (error) {
      
    }
  }

  const value = {
    admin,
    Login,
    UpdateUsername,
    UpdatePassword,
    GetAdminById,
    GetAdminByEmail
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}
