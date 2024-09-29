import { BackgroundImage, Flex, Grid, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CountdownTimer from "../../components/CountdownTimer";
import { competitionDate } from "../../lib/constants";

import XD from "./XD.webp";

export default function WhatIsFirst() {
  const isMobile = useMediaQuery("(max-width: 75em)");

  return (
    <Flex align="center" direction="column">
      <BackgroundImage src={XD} bgsz="cover" style={{ backgroundPositionY: "center" }}>
        <Flex w="100vw" justify="center" bg="#00000080">
          {!isMobile ? (
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
                  What is FIRST?
                </Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <iframe
                  src="https://www.youtube.com/embed/Jd29kzjclV0"
                  title="About FIRST Robotics Competition (2021)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ width: "100%", height: "auto", aspectRatio: "16 / 9" }}
                />
              </Grid.Col>
            </Grid>
          ) : (
            <Flex direction="column" m="lg">
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
                ta="left"
              >
                What is FIRST?
              </Text>

              <iframe
                src="https://www.youtube.com/embed/Jd29kzjclV0"
                title="About FIRST Robotics Competition (2021)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ width: "80vw", height: "45vw" }}
              />
            </Flex>
          )}
        </Flex>
      </BackgroundImage>

      <Text mt="xl" fz="h2" w="80%" ta="justify">
        FIRST is a global robotics competition that hopes to inspire the next generation of scientists and engineers. FIRST stands for “For
        Inspiration and Recognition of Science and Technology.” Combining the excitement of sport with the rigors of science and technology, FIRST
        Robotics Competition is considered the ultimate Sport for the Mind. High-school student participants call it “the hardest fun you’ll ever
        have.” Under strict rules, limited time and resources, teams of students are challenged to raise funds, design a team "brand," hone teamwork
        skills, and build and program industrial-size robots to play a difficult field game against like-minded competitors. It’s as close to
        real-world engineering as a student can get. Volunteer professional mentors lend their time and talents to guide each team. Each season ends
        with an exciting FIRST Championship.
      </Text>
      <Title mt="xl" order={1} ta="center">
        2025{" "}
        <a
          href="https://info.firstinspires.org/first-dive#hs_cos_wrapper_reefscape_logo"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          REEFSCAPE℠
        </a>{" "}
        Kickoff Countdown
      </Title>
      <CountdownTimer date={competitionDate} />
      <br />
    </Flex>
  );
}
