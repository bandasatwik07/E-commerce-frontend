import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
  },
  {
    path: "/login",
    element: <div><LoginPage></LoginPage></div>,
  },
  {
    path: "/signup",
    element: <div><SignupPage></SignupPage></div>,
  },
  {
    path: "/cart",
    element: <div><CartPage></CartPage></div>,
  },
  {
    path: "/checkout",
    element: <div><Checkout></Checkout></div>,
  },
  {
    path: "/productDetail",
    element: <div><ProductDetailPage></ProductDetailPage></div>,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
