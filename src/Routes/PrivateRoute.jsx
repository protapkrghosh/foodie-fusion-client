import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingAnimation from "../assets/loading_animation.gif"

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="flex justify-center items-center"><img src={loadingAnimation} alt="Loading Animation" /></div>
  }

  if (user) {
    return children;
  }

  return <Navigate to='/signin' state={{ from: location }} replace />
};

export default PrivateRoute;