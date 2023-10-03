import React, { useState } from "react";

export default function AdminResetPass() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const handleResetPassword = async () => {
    try {
      let res = await fetch(
        "https://finalprojectserver.onrender.com/api/admin/updatePassword",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ email, password }),
        }
      );
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
      <h2>Reset Password</h2>
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
        onChange={(e) => SetPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
}
