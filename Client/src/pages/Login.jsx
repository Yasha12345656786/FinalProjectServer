import React, { useContext, useState } from "react";
import { AdminContext } from "../Context/AdminContext";
import { redirect } from "react-router-dom";

export default function Login() {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');


  async function Submit(event) {
    event.preventDefault()
   

    const a={
    
    }
  
    let admin = { email, password };
    console.log(admin);
    let res = await fetch(`https://finalprojectserver.onrender.com/api/admin/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(admin),
    });

    let data = await res.json();
    console.log(data);
    // const isSuccesful = await Login(username, password);
    // if (isSuccesful) {
    //   return redirect("/TriviaGameMenu");
    // }
  }
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
    </div>
  );
}
