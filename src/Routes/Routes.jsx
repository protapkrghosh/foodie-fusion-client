import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import NotFound from "../pages/NotFound/NotFound";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      {
        path: 'order/:category',
        element: <Order />
      },
      {
        path: 'signin',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'secret',
        element: <PrivateRoute> <Secret /> </PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'user-home',
        element: <UserHome />
      },
      {
        path: 'my-cart',
        element: <MyCart />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      // Admin routes
      {
        path: 'admin-home',
        element: <AdminRoute><AdminHome /></AdminRoute>
      },
      {
        path: 'all-users',
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: 'add-items',
        element: <AdminRoute><AddItem /></AdminRoute>
      },
      {
        path: 'manage-items',
        element: <AdminRoute><ManageItems /></AdminRoute>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
