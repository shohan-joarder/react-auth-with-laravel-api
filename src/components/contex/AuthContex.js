import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [authToken, setAuthToken] = useState("");

  const setToken = (token) => {
    localStorage.setItem("x-auth-token", token);
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
