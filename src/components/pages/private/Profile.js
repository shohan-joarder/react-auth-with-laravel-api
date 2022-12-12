import { Link } from "react-router-dom";
import { useAuth } from "../../contex/AuthContex";
export default function Profile() {
  const { currentUser, authToken, logOut } = useAuth();
  const { username, phone } =
    currentUser !== undefined &&
    currentUser !== null &&
    currentUser &&
    JSON.parse(currentUser);
  // console.log("I am from Profile:" + authToken);
  return (
    <div>
      <h1>
        Profile {username} {phone}
      </h1>
      <Link to="/">Home</Link>
      <br />
      <br />
      <Link to="/test-context">Test</Link>
      <br />
      <br />
      <button onClick={logOut}>Logout</button>
    </div>
  );
}
