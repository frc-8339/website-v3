import { Box, Button } from "@mantine/core";
import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { IconArrowUp } from "@tabler/icons-react";

export default function Content() {
  return (
    <Box c="pr-yellow" bg="black" mih="100vh">
      <Button
      bg="#000000"
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
        <IconArrowUp color="#FBB416" size={40} />
      </Button>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
