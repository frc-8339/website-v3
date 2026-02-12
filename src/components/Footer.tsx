import { Box, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 75em)");

  return (
    <Box bg="black">
      <Flex align="center" direction="column" p="lg">
        <Image
          src="https://www.sd67.bc.ca/pics/header_logo.png"
          alt="School District 67"
          {...(isMobile ? { h: "10vh", w: "auto" } : { w: "6vw" })}
          loading="lazy"
        />

        <Text c="black" fz="h4" ta="center">
          © {new Date().getFullYear()} Penticton Robotics Team
        </Text>
        <Text>
          made by{" "}
          <a href="https://github.com/tobycm" target="_blank" rel="noopener noreferrer">
            tobycm
          </a>{" "}+ 3rinaaa
          with{" "}
          <a href="https://www.instagram.com/p/DBJwMI2pHz0" target="_blank" rel="noopener noreferrer" style={{ all: "unset" }}>
            ❤️
          </a>
        </Text>
      </Flex>
    </Box>
  );
}
