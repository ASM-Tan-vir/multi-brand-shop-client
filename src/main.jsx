import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root.jsx";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Update from "./pages/Update";
import AddedProduct from "./pages/AddedProduct";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ({ params }) =>
          fetch(
            `https://multi-brand-shop-c0diomjhf-tanvirs-projects.vercel.app/brand/${params.name}`
          ),
      },
      {
        path: "/products/:name",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(
            `https://multi-brand-shop-c0diomjhf-tanvirs-projects.vercel.app/product?name=${params.name}`
          ),
      },
      {
        path: "/addProduct",
        element: <Add></Add>,
      },

      {
        path: "/added",
        element: <AddedProduct></AddedProduct>,
        loader: () =>
          fetch(
            "https://multi-brand-shop-c0diomjhf-tanvirs-projects.vercel.app/product"
          ),
      },
      {
        path: "/updateProduct",
        element: <Update></Update>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
