import React, { useState } from "react";
import Form from "../Form";
import Button from "./Button";
import TextInput from "./inputes/TextInput";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./contex/AuthContex";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setToken, setUserDetails, currentUser, setAuthToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setLoading(true);
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: email, password }),
    });
    const result = await response.json();
    setLoading(false);
    const { status, errors, message, token, data } = result;
    if (status === "error") {
      if (errors && errors.user_id) {
        setEmailError(errors.user_id[0]);
      }
      if (errors && errors.password) {
        setPasswordError(errors.password[0]);
      }
      if (message) {
        toast.error(`${message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
    if (status === "success") {
      let result = setToken(token, data);
      if (result) {
        navigate("/profile");
      }
      // console.log(result);
      // setUserDetails(data);
      // if (message) {
      //   toast.success(`${message}`, {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
      // }
    }
  };
  return (
    <div>
      <Form>
        <TextInput
          type="email"
          placeholder="Your E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>{emailError}</span>
        <TextInput
          type="password"
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>{passwordError}</span>
        <Button onClick={!loading ? handleSubmit : (e) => e.preventDefault()}>
          {loading ? "Processing...." : "Login"}{" "}
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}
