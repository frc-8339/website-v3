import { Box, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 75em)");

  return (
    <Box>
      <Flex align="center" direction="column" p="lg">
        <Image
          src="https://www.sd67.bc.ca/pics/header_logo.png"
          alt="School District 67"
          {...(isMobile ? { h: "10vh", w: "auto" } : { w: "6vw" })}
          loading="lazy"
        />

        <Text c="black" fz="h4">
          © {new Date().getFullYear()} Penticton Robotics Team
        </Text>
      </Flex>
    </Box>
  );
}
