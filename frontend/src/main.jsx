import ReactDOM from "react-dom";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
