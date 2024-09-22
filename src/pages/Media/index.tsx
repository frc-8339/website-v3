import { Box, Button, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { photoDrive2024 } from "../../lib/constants";

import photoDriveIconFallback from "./images/PhotoDrive2023-24.png";
import photoDriveIcon from "./images/PhotoDrive2023-24.png?w=128;256;512;768;1024;1526;2048&format=webp;png&as=srcset&imagetools";

export default function AboutUs() {
  const isMobile = useMediaQuery("(max-width: 62em)");

  return (
    <Box>
      <Flex align="center" direction="column">
        <Text
          miw="30vw"
          fz={isMobile ? "20vw" : "10vw"}
          fw="bolder"
          c="pr-yellow"
          style={{
            textShadow: isMobile ? "1.6vw 1.6vw #000" : "0.8vw 0.8vw #000",
            paddingBottom: 0,
            paddingLeft: "16.4%",
            paddingRight: "16.4%",
          }}
        >
          Media
        </Text>

        <Flex m="xl" align="center" direction="column">
          <Image srcSet={photoDriveIcon} src={photoDriveIconFallback} maw="36rem" />
          <Button
            component="a"
            fullWidth
            bg="black"
            c="pr-yellow"
            fz="h2"
            h="3.5rem"
            mt="sm"
            href={photoDrive2024}
            target="_blank"
            rel="noopener noreferrer"
          >
            2024 Photo Drive
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
