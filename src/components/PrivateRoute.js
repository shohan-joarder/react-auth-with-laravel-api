import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contex/AuthContex";
export default function PrivateRoute({ element: Element, ...rest }) {
  const { authToken } = useAuth();

  //   console.log(authToken); // data not found or undefined
  return authToken ? <Outlet /> : <Navigate to="/login" />;
}
