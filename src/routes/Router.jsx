import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layout/Main";
import SignIn from "../components/SignIn";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/", 
        element: <Home />
      },
      // เพิ่ม children อื่น ๆ ตามต้องการ
    ]
  },
  {
    path: "/SingIn",
    element: <SignIn />,
  },
]);

export default Router;
