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
      <Text ta="center" w="80%" fz="h2">
        The following incentives are available to sponsors who choose to support Penticton Robotics.
        Your individual or company name/logo will be shown in one of the various formats
        below. If you are a returning sponsor of 3 or more years
        you will receive a shout out at competition during our alliance selection.
      </Text>

      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={isMobile ? 28 : 36} c="pr-yellow">
        Platinum sponsor - $5000+
      </Text>
      <Text ta="center" w="80%" fz="h2">
        - Tournaments (your company thanked during competition alliance selections nationally televised) <br />
        - Your logo displyed in the school display case <br />
        - Your logo on robot <br />
        - Large logo on team apparel <br />
        - Large logo on banner (displayed at events & tournaments)  <br />
        - Website (picture & link to sponsor’s website on webpage)
      </Text>

      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={isMobile ? 28 : 36} c="pr-yellow">
        Gold sponsor - $1,000 to 4,999
      </Text>
      <Text ta="center" w="80%" fz="h2">
        - Your business name in large font on team apparel <br />
        - Your business name on robot <br />
        - Large name & logo on banner (displayed at events & tournaments) <br />
        - Website (picture & link to sponsor’s website on webpage)
      </Text>

      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={isMobile ? 28 : 36} c="pr-yellow">
        Silver sponsor - $500 to $999
      </Text>
      <Text ta="center" w="80%" fz="h2">
        - Your business name in medium font on team apparel <br />
        - Your business name in small font and logo on banner (displayed at events & tournaments) <br />
        - Website (picture & link to sponsor’s website on webpage)
      </Text>

      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={isMobile ? 28 : 36} c="pr-yellow">
        Iron sponsor - $150 to $499
      </Text>
      <Text ta="center" w="80%" fz="h2">
        - Your business name in small font on team apparel <br />
        - Your business in small font on banner (displayed at events & tournaments)  <br />
        - Website (name of individual/business on webpage)
      </Text>

      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={isMobile ? 28 : 36} c="pr-yellow">
        Bronze sponsor - $50 to $149
      </Text>
      <Text ta="center" w="80%" fz="h2">
        - Website (name of individual/business on webpage)
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
