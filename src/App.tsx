import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "./store";
import Header from "./components/common/Header";

function App() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector<RootState>(
    (state) => state.auth.username
  );
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/search", {
        replace: true,
      });
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
