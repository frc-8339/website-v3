import { BackgroundImage, Button, Flex, Grid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import robotTouchGrass from "./IMG_1725-1.webp";

import { IconBrandGoogleDrive, IconMail, IconWorldWww } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { email, mediaGoogleDrive } from "../../lib/constants";

export default function Media() {
  const isMobile = useMediaQuery("(max-width: 62em)");

  return (
    <Flex align="center" direction="column" id="media">
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
        <Text mt="xl" fz="h2" fw="bold" ta="center">
          Team Photos and Videos from Events:
          <Button
            component="a"
            bg="black"
            c="pr-yellow"
            fz="h2"
            h="3.5rem"
            ml="sm"
            href={mediaGoogleDrive}
            target="_blank"
            rel="noopener noreferrer"
            leftSection={<IconBrandGoogleDrive />}
          >
            Google Drive
          </Button>
        </Text>

        <Text mt="xl" fz="h2" fw="bold" ta="center">
          Matches Videos, Details, Awards, etc:
          <Button
            component="a"
            bg="black"
            c="pr-yellow"
            fz="h2"
            h="3.5rem"
            ml="sm"
            href="https://frc-events.firstinspires.org/2025/team/8339"
            target="_blank"
            rel="noopener noreferrer"
            leftSection={<IconWorldWww />}
          >
            FRC Event Page
          </Button>
        </Text>

        <Text mt="xl" fz="h2" fw="bold" ta="center">
          For more information, please contact us at:
          <Link to={`mailto:${email}`} style={{ textDecoration: "none" }}>
            <Flex wrap="wrap" align="center" justify="center">
              <IconMail size={50} />
              <Text ta="center" fz="h2" fw="bold" ml="xs">
                {email}
              </Text>
            </Flex>
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
}
