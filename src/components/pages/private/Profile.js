import { Link } from "react-router-dom";
import { useAuth } from "../../contex/AuthContex";
export default function Profile() {
  const { currentUser, authToken } = useAuth();
  const { username, phone } =
    currentUser !== undefined &&
    currentUser !== null &&
    currentUser &&
    JSON.parse(currentUser);
  console.log("I am from Profile:" + authToken);
  return (
    <div>
      <h1>
        Profile {username} {phone}
      </h1>
      <Link to="/">Home</Link>
      <Link to="/test-context">Test</Link>
    </div>
  );
}
