import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contex/AuthContex";
export default function PublicRoute({ element: Element, ...rest }) {
  const { getToken, authToken } = useAuth();
  // ++++++++++++++++++++++++++++++++++++++++++++++
  return authToken ? <Navigate to="/profile" /> : <Outlet />;
}

