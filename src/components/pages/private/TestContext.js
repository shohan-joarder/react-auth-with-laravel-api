import { Link } from "react-router-dom";
import { useAuth } from "../../contex/AuthContex";
import { useNavigate } from "react-router-dom";
export default function TestContext() {
  const navigate = useNavigate()
  const { currentUser, authToken } = useAuth();
  const { username, phone } =
    currentUser !== undefined &&
    currentUser !== null &&
    currentUser &&
    JSON.parse(currentUser);
  // console.log("I am from Profile:" + authToken);
  return (
    <div>
      <h1>
        Test {username} {phone}
      </h1>
      <Link to="/">Home</Link>
      <br/>
      <br/>
      <button onClick={()=>navigate(-1)} >Back</button> 
    </div>
  );
}
