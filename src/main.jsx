import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicLayout from "./public/PublicLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./components/ErrorPage";
import Admin from "./private/admin/Admin";
import Member from "./private/member/Member";
import PrivateRoutes from "./private/PrivateRoutes";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      {
        path: "admin",
        element: <PrivateRoutes element={<Admin />} />,
      },
      {
        path: "member",
        element: <PrivateRoutes element={<Member />} />,
      },
      { path: "product", element: <Product /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
