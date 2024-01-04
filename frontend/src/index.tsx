import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import Login from "./pages/login";
import Register from "./pages/register";
import { ConfigProvider, theme } from "antd";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>Home</h1>,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <RouterProvider router={router} />

        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
