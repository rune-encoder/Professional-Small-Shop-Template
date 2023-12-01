import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// |========== IMPORT MAIN COMPONENTS: PAGES ==========|
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";

// |========== IMPORT CSS STYLES ==========|
// <===== MAIN GLOBAL STYLE =====>
import "./styles/index.css";

// <===== PAGES STYLES =====>
import "./styles/Home.css";

// <===== COMPOENT GROUP STYLES =====>
import "./styles/Header.css";
import "./styles/Footer.css";

// <===== UTILITIES STYLES =====>
import "./styles/Carousel.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
