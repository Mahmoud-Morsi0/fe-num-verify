import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//React Router Dom
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";

//Add I18n
import "./i18n";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
