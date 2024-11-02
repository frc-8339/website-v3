import { BackgroundImage, Button, Flex, Grid, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { photoDrive2024 } from "../../lib/constants";

import robotTouchGrass from "./IMG_1725-1.webp";

import photoDriveIconFallback from "./PhotoDrive2023-24.png";
import photoDriveIcon from "./PhotoDrive2023-24.png?w=128;256;512;768;1024;1526;2048&format=webp;png&as=srcset&imagetools";

export default function AboutUs() {
  const isMobile = useMediaQuery("(max-width: 62em)");

  return (
    <Flex align="center" direction="column">
      <BackgroundImage src={robotTouchGrass} bgsz="cover" style={{ backgroundPositionY: "67.5%" }}>
        <Flex w="100%" justify="center" bg="#00000080">
          <Grid w="80%" align="center" justify="space-between">
            <Grid.Col span={3}>
              <Text
                maw="40vw"
                fz={isMobile ? "20vw" : "10vw"}
                fw="bolder"
                lh="1.2"
                c="pr-yellow"
                style={{
                  textShadow: isMobile ? "1.6vw 1.6vw #000" : "0.8vw 0.8vw #000",
                  paddingBottom: 0,
                  paddingLeft: "10%",
                }}
                ta={isMobile ? "center" : "left"}
              >
                Media
              </Text>
            </Grid.Col>
            <Grid.Col span={6}></Grid.Col>
          </Grid>
        </Flex>
      </BackgroundImage>

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
  );
}
