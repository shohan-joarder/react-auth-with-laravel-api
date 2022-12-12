import React, { useContext, useEffect, useState } from "react";

import {useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("x-auth-token")
  );

  // Added new state +++++++++++++++++++++++++++++++
  const [refresh, setRefresh] = useState(false)

  // function name setToken to setStates ++++++++++++++++++++++++++
  const setStates = (token) => {
    localStorage.setItem("x-auth-token", token);
    setAuthToken(getToken());
    setCurrentUser(getCurrentUser());
    setRefresh(true)
  };

  const setUserDetails = (userDetails) => {
    localStorage.setItem("user-details", JSON.stringify(userDetails));
  };

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
    // Added +++++++++++++++++++++++++++++++
    setAuthToken("");
    navigate("/");
  };


  // +++++++++++++++++++++++++++++++++++
  useEffect(() => {
    if (authToken && refresh) {
      navigate("/profile");
    }
  }, [authToken]);

  const value = {
    currentUser,
    setStates,
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
