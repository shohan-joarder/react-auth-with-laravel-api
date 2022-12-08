import { useAuth } from "../contex/AuthContex";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Home() {
  const { logOut, authToken } = useAuth();
  const navigate = useNavigate();
  console.log("I am from Home:" + authToken);
  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div>
      <h1> Home</h1>
      {authToken && <button onClick={handleLogout}> Logout</button>}

      {!authToken && <Link to="/login">Login</Link>}
      {authToken && <Link to="/profile">profile</Link>}
    </div>
  );
}
