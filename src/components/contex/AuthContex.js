import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [authToken, setAuthToken] = useState("");
  const navigate = useNavigate();

  const setToken = (token, details) => {
    setAuthToken(token);
    localStorage.setItem("x-auth-token", token);
    return token;
    // console.log(details);
    // if (){

    //   return authToken;
    // } else {
    //   return false;
    // }
  };

  const setUserDetails = (userDetails) => {};

  const getToken = () => {
    let token = localStorage.getItem("x-auth-token");
    return token;
  };

  const getCurrentUser = () => {
    let details = localStorage.getItem("user-details");
    return details;
  };

  const logOut = () => {
    localStorage.removeItem("x-auth-token");
    localStorage.removeItem("user-details");
  };

  useEffect(() => {
    setAuthToken(getToken());
    setCurrentUser(getCurrentUser());
    console.log("I am from context:" + authToken); // here data found
    // logOut();
  }, [authToken]);

  const value = {
    currentUser,
    setToken,
    setUserDetails,
    getToken,
    authToken,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
