import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Dashboard from "./Dashboard/Dashboard";
import Main from "./Main/Main"
import Overview from "./Sidebar/Overview/Overview";
import SignUp from "./Signup/SignUp";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  // {
  //   path: "/users",
  //   element: <Users/>,
  // },
  // {
  //   path: "/data-analysis",
  //   element: <DataAnalysis/>,
  // },
  // {
  //   path: "/data-management",
  //   element: <DataManagement/>,
  // },
    {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/overview",
    element: <Overview/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
