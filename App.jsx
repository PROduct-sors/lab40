import React from "react";
import { RegistrationForm, UncontrolledLoginForm, ProfileForm, ValidatedRegistrationForm } from "./Forms";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Лабораторна робота: Робота з формами</h1>
      <style>{`
        .form-box {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background-color: #f9f9f9;
        }
        .form-box input { padding: 8px; font-size: 16px; border: 1px solid #aaa; border-radius: 4px; }
        .form-box button { padding: 10px; font-size: 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        .form-box button:hover { background-color: #0056b3; }
        .error { color: red; font-size: 14px; margin-top: -5px; }
      `}</style>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <RegistrationForm />
        <UncontrolledLoginForm />
        <ProfileForm />
        <ValidatedRegistrationForm />
      </div>
    </div>
  );
}

export default App;
