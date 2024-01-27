import { Navigate, useLocation } from "react-router-dom";
import loadingAnimation from "../assets/loading_animation.gif"
import { useAuth } from "../hooks/useAuth";
import { useAdmin } from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <div className="flex justify-center items-center"><img src={loadingAnimation} alt="Loading Animation" /></div>
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to='/' state={{ from: location }} replace />
};

export default AdminRoute;
