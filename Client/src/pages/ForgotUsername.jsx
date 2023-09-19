import React, { useState } from "react";

function ForgotUsername() {
  const [email, SetEmail] = useState("");
  const [username, SetUsername] = useState("");

  const handleResetUsername = async () => {
    try {
      let res = await fetch("http://localhost:5500/api/player/updateUsername", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email, username }),
      });
      if (res.ok) {
        alert("update");
      } else {
        alert("fail");
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Forgot Username</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => SetEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => SetUsername(e.target.value)}
      />
      <button onClick={handleResetUsername}>Reset Username</button>
    </div>
  );
}
export default ForgotUsername;
