import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { logout } from "@/store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAutenticated = useSelector<RootState>((state) => state.auth.username);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center w-full bg-gray-200 p-4">
      <div className="text-xl font-sans font-bold">Number Verify</div>
      <div>
        {isAutenticated ? (
          <Button onClick={logoutHandler}>Logout</Button>
        ) : (
          <Button onClick={loginHandler}>Login</Button>
        )}
      </div>
    </div>
  );
};

export default Header;
