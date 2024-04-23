import { RootState } from "@/store";
import { useSelector } from "react-redux";

const useAuth = () => {
  const isAuthenticated = useSelector<RootState>(
    (state) => state.auth.username
  );

  const hasAccess = isAuthenticated;

  return {
    hasAccess,
  };
};

export default useAuth;
