import { type RouteObject } from "react-router-dom";
import Component from "../pages/component"
import AIGC from "../pages/aigc";
import Home from "../pages/home";
import Layout from "../layout";
const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/component",
          element: <Component />,
        },
        { path: "/aigc", element: <AIGC /> },
      ],
    },
  ];
  

  export default routes