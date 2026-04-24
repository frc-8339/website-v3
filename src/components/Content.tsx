import { Box } from "@mantine/core";
import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Content() {
  return (
    <Box c="pr-yellow" mih="100vh">
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
