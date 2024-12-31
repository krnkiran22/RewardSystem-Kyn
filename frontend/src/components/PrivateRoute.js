import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  
  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  // Return the element if the user is authenticated
  return element;
};

export default PrivateRoute;