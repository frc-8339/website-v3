import { BackgroundImage, Box, Flex, Grid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Link } from "react-router-dom";

import marcusFixingRobot from "./IMG_0461.webp";

export default function SponsorDonate() {
  const isMobile = useMediaQuery("(max-width: 62em)");

  return (
    <Flex align="center" direction="column" id="power" bg="black">
      <BackgroundImage src={marcusFixingRobot} bgsz="cover" style={{ backgroundPositionY: "center" }}>
        <Box bg="#00000080">
          <Text
            maw="40vw"
            fz={isMobile ? "15vw" : "5vw"}
            fw="bolder"
            lh="1.2"
            c="pr-yellow"
            ff="Audiowide"
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

      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={isMobile ? 48 : 64} c="pr-yellow">
        Sponsor Incentives
      </Text>
      <Text ta={isMobile ? "left" : "center"} w="80%" fz="h2">
        The following incentives are available to sponsors who choose to support Penticton
        Robotics.
      </Text>

      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={isMobile ? 28 : 36} c="pr-yellow">
        Platinum sponsor - $5000+
      </Text>
      <Text ta={isMobile ? "left" : "center"} w="80%" fz="h2">
        - At Competitions: your company will be thanked during competition alliance selections -
        nationally televised. <br />
        - Your logo displayed in the school display case <br />
        - Large logo on the robot <br />
        - Large logo on team apparel <br />
        - Large name and logo on banner (displayed at outreach events & tournaments) <br />
        - Website (picture & link to sponsor’s website on our webpage)
      </Text>

      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={isMobile ? 28 : 36} c="pr-yellow">
        Gold sponsor - $1,000 to 4,999
      </Text>
      <Text ta={isMobile ? "left" : "center"} w="80%" fz="h2">
        - Logo on team apparel <br />
        - Logo name on the robot <br />
        - Large logo on banner (displayed at outreach events & tournaments) <br />
        - Website (picture & link to sponsor’s website on our webpage)
      </Text>

      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={isMobile ? 28 : 36} c="pr-yellow">
        Silver sponsor - $500 to $999
      </Text>
      <Text ta={isMobile ? "left" : "center"} w="80%" fz="h2">
        - Medium logo on team apparel <br />
        - Medium logo on banner (displayed at outreach events & tournaments) <br />
        - Website (picture & link to sponsor’s website on our webpage)
      </Text>

      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={isMobile ? 28 : 36} c="pr-yellow">
        Iron sponsor - $150 to $499
      </Text>
      <Text ta={isMobile ? "left" : "center"} w="80%" fz="h2">
        - Small logo or business name on team apparel <br />
        - Small logo or business name on banner (displayed at events & tournaments) <br />
        - Website (name of individual/business on our webpage)
      </Text>

      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={isMobile ? 28 : 36} c="pr-yellow">
        Bronze sponsor - $50 to $149
      </Text>
      <Text ta={isMobile ? "left" : "center"} w="80%" fz="h2">
        - Website (name of individual/business on our webpage)
      </Text>

      {/* <Sponsors /> */}

      {!isMobile ? (
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
              <a href="/Sponsorship_Letter.pdf" target="_blank" rel="noopener noreferrer">
                Information Sheet
              </a>
              <br />
              You can also
              <Link to="/contact"> contact us</Link> for more information.
            </Text>
          </Grid.Col>
        </Grid>
      ) : (
        <Flex direction="column" m="md">
          <Text fz="h2" m="md">
            Donations:
            <br />
            School District 67
            <br />
            425 Jermyn Ave
            <br />
            Penticton, BC V2A 1Z4
          </Text>
          <Text fz="h2" m="md">
            Sponsors:
            <br />
            Princess Margaret Secondary School
            <br />
            120 Green Ave W
            <br />
            Penticton, BC V2A 3T1
          </Text>
          <Text fz="h2" m="md">
            Please check out our information sheet for more info:{" "}
            <a href="/Sponsorship_Letter.pdf" target="_blank" rel="noopener noreferrer">
              Information Sheet
            </a>
            <br />
            You can also <Link to="/contact">contact us</Link> for more information.
          </Text>
        </Flex>
      )}

      <a href="https://app.return-it.ca/pentictonrobotics">
        {" "}
        <img
          alt="Donate your recycling button"
          src="https://app.return-it.ca/Donate_Button_V1_orange_.png"
          width={isMobile ? 250 : 350}
          title="DONATE YOUR RECYCLING"
        />{" "}
      </a>
    </Flex>
  );
}
