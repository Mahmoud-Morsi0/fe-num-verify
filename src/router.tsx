import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "./components/common/requireAuth";
//Pages
import App from "@/App.tsx";
import LoginPage from "./pages/LoginPage";
import { SearchPage } from "./pages/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },

      //ProtectedPages
      {
        element: <RequireAuth />,
        children: [
          {
            path: "/search",
            element: <SearchPage />,
          },
        ],
      },
    ],
  },
]);
