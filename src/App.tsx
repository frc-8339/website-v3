import { MantineProvider } from "@mantine/core";
import { RouteObject, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Content from "./components/Content";
import NotFound from "./pages/404";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import WhatIsFirst from "./pages/WhatIsFIRST";
import Benefits from "./pages/Benefits";
import Media from "./pages/Media";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/first",
        element: <WhatIsFirst />,
      },
      {
        path: "/benefits",
        element: <Benefits />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);

export default function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: "pr-yellow",
        fontFamily: "Roboto Condensed, sans-serif",
        headings: { fontFamily: "Roboto, sans-serif" },
        colors: {
          "pr-yellow": ["#FBB416", "#FBB416", "#FBB416", "#FBB416", "#FBB416", "#FBB416", "#FBB416", "#FBB416", "#FBB416", "#FBB416"],
        },
        breakpoints: {
          mn: "471px",
        },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
