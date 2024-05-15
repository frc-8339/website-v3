import { Box, Text, Title } from "@mantine/core";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const backToHome = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(backToHome);
  });

  return (
    <Box w="100%" h="50vh" display="flex" style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <Title mb={"md"} ta="center">
        Oops, content not found!
      </Title>
      <Text ta="center">
        You will be automatically redirected to the{" "}
        <Link to="/" style={{ color: "black" }}>
          homepage
        </Link>{" "}
        shortly.
      </Text>
    </Box>
  );
}
