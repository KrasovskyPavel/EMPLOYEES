import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>Home</h1>,
  },
  {
    path: Paths.login,
    element: <h1>Login</h1>,
  },
  {
    path: Paths.register,
    element: <h1>Register</h1>,
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
