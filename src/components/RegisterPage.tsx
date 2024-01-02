import {useState } from "react";
import { Navigate } from "react-router-dom";


function RegisterPage() {

  return (
    <form>
      <h1 className="login-title">Register</h1>
      <input
        type="text"
        placeholder="Username"
      />
      <input
        type="email"
        placeholder="Email"
      />
      <input
        type="password"
        placeholder="Password"
       
      />
      <button className="my-button" type="submit">
        Register
      </button>
    </form>
  );
}

export default RegisterPage;