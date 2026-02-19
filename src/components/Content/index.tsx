import { Box, Button } from "@mantine/core";
import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { IconArrowUp } from "@tabler/icons-react";

export default function Content() {
  return (
    <Box c="pr-yellow" mih="100vh">
      <Button
      bg="#FBB416"
        style={{
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <IconArrowUp color="#000000" size={40} />
      </Button>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
