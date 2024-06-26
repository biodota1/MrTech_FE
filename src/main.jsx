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
import Unauthorized from "./pages/Unauthorized";
import Prefetch from "./extra/Prefetch";
import UserList from "./features/user/UserList";
import Dashboard from "./components/Dashboard";
import ProductList from "./features/product/ProductList";
import Category from "./pages/Category";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Prefetch />, children: [{ path: "/", element: <Home /> }] },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "/unauthorized", element: <Unauthorized /> },
      {
        path: "admin",
        element: <PrivateRoutes roles={["Admin"]} element={<Admin />} />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "users", element: <UserList /> },
          { path: "products", element: <ProductList /> },
        ],
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes roles={["Admin", "Member"]} element={<Member />} />
        ),
      },
      { path: "product", element: <Product /> },
      { path: "products", element: <Products /> },
      { path: "products/:category", element: <Category /> },
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
