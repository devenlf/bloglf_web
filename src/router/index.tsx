import { type RouteObject } from "react-router-dom";
import Component from "../pages/component";
import AIGC from "../pages/aigc";
import Home from "../pages/home";
import Layout from "../layout";
import Road from "../pages/3d/road";
import Sence from "../pages/3d";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "component",
        element: <Component />,
      },
      { path: "aigc", element: <AIGC /> },
      {
        path: "3d",
        element: <Sence />,
        children: [
          {
            path: "road",
            element: <Road />,
          },
        ],
      },
    ],
  },
];

export default routes;
