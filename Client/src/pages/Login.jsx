import React, { useContext, useState } from "react";
import { AdminContext } from "../Context/AdminContext";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigation = useNavigate;

  const { admin, Login } = useContext(AdminContext);
  async function Submit(e) {
    e.preventDefault();
  
    try {
      await Login(email, password);
    
    } catch (error) {
      console.error(error);
  
    }
  }

  // async function Submit(event) {
  //   event.preventDefault();

  //   let admin = { email, password };
  //   console.log(admin);
  //   let res = await fetch(
  //     `https://finalprojectserver.onrender.com/api/admin/login`,
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify(admin),
  //     }
  //   );
  //     if(res){
  //       navigate('/UserInfo')
  //     }
  //   let data = await res.json();

  //   console.log(data);

  //   sessionStorage.setItem('userdata',JSON.stringify(data) )

  // }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={Submit}>
        <input
          type="email"
          placeholder="email"
          required
          onChange={(event) => SetEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(event) => SetPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button>  <Link to="/AdminForgotPassword">Forgot Pass?</Link> </button>
    </div>
  );
}
