import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from './pages/home';
import './App.css';
// import About from './Pages/About/about';
import Productlisting from './Pages/Product_listing/Productlisting';
import Productdetail from './Pages/Product_detail/Productdetail';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
import Loginorregister from './Pages/Login_register/Loginorregister';
import Blog from './Pages/Blog_list/Blog';
import Blogsingle from './Pages/Blog-single/Blogsingle';
import Error from './Pages/Error';

// import AdminDashboard from "./pages/Admin/index";
import './App.css';
import "./assets/style.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
