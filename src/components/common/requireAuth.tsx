import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const RequireAuth = () => {
  const { hasAccess } = useAuth();
  const location = useLocation();

  return hasAccess ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
