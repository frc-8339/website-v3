import { BackgroundImage, Box, Flex, Grid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Link } from "react-router-dom";
import marcusFixingRobot from "./IMG_0461.webp";

export default function SponsorDonate() {
  const isMobile = useMediaQuery("(max-width: 62em)");

  return (
    <Box>
      <Flex align="center" direction="column">
        <BackgroundImage src={marcusFixingRobot} bgsz="cover" style={{ backgroundPositionY: "center" }}>
          <Box bg="#00000080">
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
              Powering Penticton Robotics
            </Text>
          </Box>
        </BackgroundImage>

        <Grid m="md" mt="xl" align="start" justify="center">
          <Grid.Col span={3}>
            <Text fz="h2">
              Donations:
              <br />
              School District 67
              <br />
              425 Jermyn Ave
              <br />
              Penticton, BC V2A 1Z4
            </Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text fz="h2">
              Sponsors:
              <br />
              Princess Margaret Secondary School
              <br />
              120 Green Ave W
              <br />
              Penticton, BC V2A 3T1
            </Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text fz="h2">
              Please check out our information sheet for more info:{" "}
              <a href="https://pentictonrobotics.pages.dev/gallery/SponsorDonationInformationSheet.pdf" target="_blank" rel="noopener noreferrer">
                Information Sheet
              </a>
              <br />
              You can also
              <Link to="/contact"> contact us</Link> for more information.
            </Text>
          </Grid.Col>
        </Grid>
      </Flex>
    </Box>
  );
}
