import { Flex, Text, Title } from "@mantine/core";
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
    <Flex w="100%" h="50vh" direction="column" align="center" justify="center" ta="center">
      <Title mb="md" ta="center">
        Oops, content not found!
      </Title>
      <Text ta="center">
        You will be automatically redirected to the{" "}
        <Link to="/" color="black">
          homepage
        </Link>{" "}
        shortly.
      </Text>
    </Flex>
  );
}
