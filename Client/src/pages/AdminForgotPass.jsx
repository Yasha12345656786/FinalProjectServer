import emailjs from "@emailjs/browser";
import React, { useCallback, useState } from "react";
export default function AdminForgotPass() {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const EMAILJS_PUBLIC_KEY = "SNMHmWLLZGyZpn0pF";
  const sendEmail = () => {
    debugger;
    console.log(recipientEmail)
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Define the email data (replace with your service and template IDs)
    const emailData = {
      service_id: "service_v12ke1m",
      template_id: "template_s7wib3t",
      user_id: EMAILJS_PUBLIC_KEY, // User ID can be the same as your public key
      template_params: {
        to_email: recipientEmail, // Replace with the recipient's email address
        subject: "Click The Link Below To Reset Your Password:",
        message: "https://finalprojectserver.onrender.com/AdminResetPass",
      },
    };
    // Send the email
    emailjs
      .send(
        emailData.service_id,
        emailData.template_id,
        emailData.template_params
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setEmailSent(true);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setEmailSent(false);
      });
  };
  return (
    <div className="containerStyle">
      <h2 className="headingStyle">Admin Forgot Password</h2>
      <p>Enter Your Email Address To Reset Your Password</p>
      <input
        placeholder="Your Email Address"
        onChange={(event) => setRecipientEmail(event.target.value)}
        className="inputStyle"
      />
      <button title="Send Email" onClick={sendEmail} disabled={emailSent}  className="submitButtonStyle">
        Send
      </button>
      {emailSent && <h4>Email Sent Successfully</h4>}
    </div>
  );
}
