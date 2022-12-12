import React, { useState } from "react";
import Form from "../Form";
import Button from "./Button";
import TextInput from "./inputes/TextInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./contex/AuthContex";
import Data from "./data/data";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setStates, setUserDetails, currentUser,  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1,
        id: 1,
        title: "sunt aut",
      }),
    });
    const result = await response.json();
    setLoading(false);
    const { status, errors, message, token, data } = Data;
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
      setStates(token);
      setUserDetails(data);
      if (message) {
        toast.success(`${message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
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
        <Button onClick={handleSubmit}>
          {loading ? "Processing...." : "Login"}
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}
