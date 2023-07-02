import { auth } from "../database/firebaseconfig";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  if (!auth.currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};
