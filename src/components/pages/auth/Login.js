import React from "react";
import LoginForm from "../../LoginForm";
import classes from "../../styles/Login.module.css";
import { AuthProvider } from "../../contex/AuthContex";

export default function Login() {
  return (
    <AuthProvider>
      <div className={classes.loginDiv}>
        <h3>Please Login</h3>
        <LoginForm />
      </div>
    </AuthProvider>
  );
}
