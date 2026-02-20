import { Box, Divider, Flex, Grid, Group, Image, Space, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconMail } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import HomeTopButton from "../../components/Buttons/HomeTop";
import { email, homeButtons } from "../../lib/constants";
import "./index.css";

import winFallback from "./20250302_014149096_iOS.png";
import win from "./20250302_014149096_iOS.png?w=768;1024;1280;1366;1440;1920;2560;3840;4032&format=webp;jpg;png&as=srcset&imagetools";

import winnerBanner from "./2025 Winner.svg";

import pentictonWesternNewsFallback from "./newsLogos/Penticton-Western-News.webp";
import pentictonWesternNews from "./newsLogos/Penticton-Western-News.webp?w=128;192;256;320;512;768;1024&format=webp;png&as=srcset&imagetools";
import pentictonNowFallback from "./newsLogos/PentictonNow-Logo.png";
import pentictonNow from "./newsLogos/PentictonNow-Logo.png?w=128;192;256;320;512;768;1024&format=webp;png&as=srcset&imagetools";
import castanet from "./newsLogos/castanet-logo.svg";

import NewsQuote from "../../components/NewsQuote";
import Sponsors from "../../components/Sponsors";
import NewsletterPopup from "../../components/NewsletterPopup";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 64em)");

  return (
  <Box mb="10vh">
    <NewsletterPopup />
      {isMobile ? (
        <Stack bg="black" p="xl">
          <Text ff="Audiowide" fw={"bolder"} fz={64} c="pr-yellow">
            Penticton Robotics
          </Text>
          <Text fz={45} fw="bold" c="#FBB416">
            FRC Team #8339
          </Text>
          <Link to={`mailto:${email}`}>
            <Text fz={26} c="#FBB416">
              <IconMail color="#FBB416" size={20} style={{ marginRight: "4px" }} />
              {email}
            </Text>
          </Link>
          <Text fz={26} c="#FBB416">
            Member of the Okanagan Robotics Alliance
          </Text>
          <Group gap="xs">
            <Link target="_blank" to="https://www.instagram.com/penticton_robotics" style={{ textDecoration: "none" }}>
              <IconBrandInstagram color="#FBB416" size={36} />
            </Link>
            <Link target="_blank" to="https://www.facebook.com/PentictonRobotics">
              <IconBrandFacebook color="#FBB416" size={36} />
            </Link>

            <Link target="_blank" to="https://www.youtube.com/@pentictonrobotics" style={{ textDecoration: "none" }}>
              <IconBrandYoutube color="#FBB416" size={36} />
            </Link>
          </Group>

          <Grid>
            <Grid.Col span={9}>
              <Image srcSet={win} src={winFallback} alt="2025 REEFSCAPE℠ Competition Champion" />
            </Grid.Col>
            <Grid.Col span={3}>
              <Image src={winnerBanner} alt="2025 REEFSCAPE℠ Competition Champion" />
            </Grid.Col>
          </Grid>

          <Text fz={24} c="#FBB416">
            - team running since 2018 <br />
            - located in penticton @ maggie <br />
            - combination of students from pen hi and maggie <br />
            - hard working team <br />- winner of 2025 competition
          </Text>
          {homeButtons.map((button) => (
            <HomeTopButton key={`${button.title} ${button.url}`} title={button.title} url={button.url} />
          ))}
        </Stack>
      ) : (
        <Grid bg={"black"} p="5vw">
          <Grid.Col span={5}>
            <Text ff="Audiowide" fw={"bolder"} fz={64} c="pr-yellow">
              Penticton Robotics
            </Text>
            <Text fz={45} fw="bold" c="#FBB416">
              FRC Team #8339
            </Text>
            <Link to={`mailto:${email}`}>
              <Text fz={26} c="#FBB416">
                <IconMail color="#FBB416" size={20} style={{ marginRight: "4px" }} />
                {email}
              </Text>
            </Link>
            <Text fz={26} c="#FBB416">
              Member of the Okanagan Robotics Alliance
            </Text>
            <Group gap="xs">
              <Link target="_blank" to="https://www.instagram.com/penticton_robotics" style={{ textDecoration: "none" }}>
                <IconBrandInstagram color="#FBB416" size={36} />
              </Link>
              <Link target="_blank" to="https://www.facebook.com/PentictonRobotics">
                <IconBrandFacebook color="#FBB416" size={36} />
              </Link>

              <Link target="_blank" to="https://www.youtube.com/@pentictonrobotics" style={{ textDecoration: "none" }}>
                <IconBrandYoutube color="#FBB416" size={36} />
              </Link>
            </Group>
            <Grid>
              <Grid.Col span={8.5}>
                <Stack align="left" justify="start">
                  <Text fz={24} c="#FBB416">
                    - team running since 2018 <br />
                    - located in penticton @ maggie <br />
                    - combination of students from pen hi and maggie <br />
                    - hard working team <br />- winner of 2025 competition
                  </Text>
                  <Grid mr={"xs"} justify="center" my="lg" visibleFrom="sm">
                    <Grid.Col span={6}>
                      {homeButtons.map((button, index) =>
                        index % 2 === 0 ? <HomeTopButton key={`${button.title} ${button.url}`} title={button.title} url={button.url} /> : null,
                      )}
                    </Grid.Col>
                    <Grid.Col span={6}>
                      {homeButtons.map((button, index) =>
                        index % 2 !== 0 ? <HomeTopButton key={`${button.title} ${button.url}`} title={button.title} url={button.url} /> : null,
                      )}
                    </Grid.Col>
                  </Grid>
                </Stack>
              </Grid.Col>
              <Grid.Col span={3.5}>
                <Image src={winnerBanner} alt="2025 REEFSCAPE℠ Competition Champion" />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={7}>
            <Image srcSet={win} src={winFallback} alt="2025 REEFSCAPE℠ Competition Champion" />
          </Grid.Col>
        </Grid>
      )}

      <Sponsors />

      {/* News Quotes */}
      <Flex align="center" direction={isMobile ? "column" : "row"} justify="center" mt="8vh" mx="4vw" h="100%" ta="center">
        <NewsQuote
          quote={`"Penticton Robotics needs to build and program robots to perform challenging tasks against a field of competitors.They must also raise
          funds, design a team ‘brand’, hone teamwork skills, and perform community outreach. In addition to learning valuable STEM and life skills,
          participants are eligible to apply for $80 million [$110 million CAD] in college scholarships.”`}
          image={{ srcSet: pentictonWesternNews, src: pentictonWesternNewsFallback, alt: "Penticton Western News logo" }}
          isMobile={isMobile}
        />

        {isMobile ? <Space h="10vh" /> : <Divider color="#FBB416" h="70vh" mx="xl" orientation="vertical" />}

        <NewsQuote
          quote={`"If they play their cards right, in February of 2023 they'll accompany the robot they’re building — all 120 pounds of it — to Victoria for
          the 2023 FIRST Robotics Competition."`}
          image={{ srcSet: pentictonNow, src: pentictonNowFallback, alt: "Penticton Now logo" }}
          isMobile={isMobile}
        />

        {isMobile ? <Space h="10vh" /> : <Divider color="#FBB416" h="70vh" mx="xl" orientation="vertical" />}

        <NewsQuote
          quote={`"Penticton's team was knocked out in the first round of the finals but ended up being chosen for the creativity award because the judges liked their recycled hockey stick scissor lift."`}
          image={{ src: castanet, alt: "Castanet logo" }}
          isMobile={isMobile}
        />
      </Flex>

      <Space h="10vh" />

      <Flex align="center" justify="center" direction={isMobile ? "column" : "row"}>
        <Flex align="center" justify="center" direction="column"></Flex>
      </Flex>
    </Box>
  );
}
