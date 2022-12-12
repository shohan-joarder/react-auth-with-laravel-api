import React from "react";
import LoginForm from "../../LoginForm";
import classes from "../../styles/Login.module.css";

export default function Login() {
  return (
      <div className={classes.loginDiv}>
        <h3>Please Login</h3>
        <LoginForm />
      </div>
  );
}
