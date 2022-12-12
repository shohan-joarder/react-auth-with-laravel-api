import { useAuth } from "../contex/AuthContex";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Home() {
  const { logOut, authToken } = useAuth();
  const navigate = useNavigate();
  // console.log("I am from Home:" + authToken);


  return (
    <div>
      <h1>Home</h1>
      {authToken && <Link to="/profile">profile</Link>}
      <br/>
      <br/>
      {authToken ? (
        <Link to="/">
          <button onClick={logOut}>Logout</button>
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}
