import { MantineProvider } from "@mantine/core";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Content from "./components/Content";

import Home from "./pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        colors: {
          dark: [
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
          ],
        },
        fontFamily: "Readex Pro, sans-serif",
        headings: {
          fontFamily: "Readex Pro, sans-serif",
        },
        breakpoints: {
          minplans: "80rem",
        },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}