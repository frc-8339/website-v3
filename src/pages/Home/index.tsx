import { BackgroundImage, Box, Center, Divider, Flex, Grid, Group, Image, Space, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconMail } from "@tabler/icons-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeTopButton from "../../components/Buttons/HomeTop";
import { email, homeButtons, mrWalkerEmail, sponsors } from "../../lib/constants";
import "./index.css";

import firstLogo8339Fallback from "./First+8339LogoBlack.webp";
import firstLogo8339 from "./First+8339LogoBlack.webp?w=320;512;768;1024&format=webp;png&as=srcset&imagetools";

import robotQueueing from "./robot queueing.webp";

import lenovoThinkbook14G3ACLakaToby_21a2XDDD from "./code.webp";

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
import { random } from "../../lib/utils";
import facebook from "./socialMediaIcons/facebook.svg";
import instagramFallback from "./socialMediaIcons/instagram.png";
import instagram from "./socialMediaIcons/instagram.png?w=16;32;48;64;96;128;192;256;320;512;768&format=webp;png&as=srcset&imagetools";
import twitter from "./socialMediaIcons/twitter.svg";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  const confettiDuration = 60 * 1000;
  const particles = 200;
  const particlesOptions = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const animationEnd = Date.now() + confettiDuration;

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = particles * (timeLeft / confettiDuration);
      // since particles fall down, start a bit higher than random
      confetti({ ...particlesOptions, particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...particlesOptions, particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box mb="10vh">
      <BackgroundImage src={robotQueueing} bgsz="cover" bgr="repeat">
        <Flex align="center" direction="column" bg="#fbb41680" w="100%" h="100%">
          <Box h={!isMobile ? "20rem" : "41.9vw"}>
            <Image
              srcSet={firstLogo8339}
              {...(!isMobile ? { mah: "20rem", w: "auto" } : { h: "auto", maw: "80vw" })}
              src={firstLogo8339Fallback}
              alt="FRC logo with team number 8339"
            />
          </Box>
          {/* <Title order={1} ta="center">
            2025{" "}
            <a
              href="https://info.firstinspires.org/first-dive#hs_cos_wrapper_reefscape_logo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              REEFSCAPE℠
            </a>
          </Title> */}

          <Text fz={60} fw="bold" ta="center" mb="lg" w="100%" className="rainbow" px="xl" lh={isMobile ? "4.5rem" : "h1"}>
            2025{" "}
            <a
              href="https://info.firstinspires.org/first-dive#hs_cos_wrapper_reefscape_logo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              REEFSCAPE℠
            </a>{" "}
            Competition Champion!
          </Text>

          <Image srcSet={win} src={winFallback} alt="2025 REEFSCAPE℠ Competition Champion" w={isMobile ? "90vw" : "70vw"} />

          <Image src={winnerBanner} alt="2025 REEFSCAPE℠ Competition Champion" my="lg" w={isMobile ? "50vw" : "20vw"} />

          {/* <Progress /> */}

          {/* <CountdownTimer date={competitionDate} /> */}
          <Grid justify="center" my="lg" visibleFrom="sm" w="75vw">
            <Grid.Col span={5}>
              {homeButtons.map((button, index) =>
                index % 2 === 0 ? <HomeTopButton key={`${button.title} ${button.url}`} title={button.title} url={button.url} /> : null,
              )}
            </Grid.Col>
            <Grid.Col span={5}>
              {homeButtons.map((button, index) =>
                index % 2 !== 0 ? <HomeTopButton key={`${button.title} ${button.url}`} title={button.title} url={button.url} /> : null,
              )}
            </Grid.Col>
          </Grid>
          <Flex align="center" direction="column" my="lg" hiddenFrom="sm">
            {homeButtons.map((button) => (
              <HomeTopButton key={`${button.title} ${button.url}`} title={button.title} url={button.url} />
            ))}
          </Flex>
        </Flex>
      </BackgroundImage>
      {/* Email */}
      <BackgroundImage src={lenovoThinkbook14G3ACLakaToby_21a2XDDD}>
        <Box bg="rgba(0, 0, 0, 0.7)">
          <Link to={`mailto:${email}`} style={{ textDecoration: "none" }}>
            <Center h="20vh">
              <Flex wrap="wrap" align="center" justify="center">
                <IconMail color="#FBB416" size={50} />
                <Text ta="center" fz="h2" c="pr-yellow" fw="bold" ml="xs">
                  {email}
                </Text>
              </Flex>
            </Center>
          </Link>
        </Box>
      </BackgroundImage>

      <Sponsors sponsors={sponsors.filter((sponsor) => ["diamond", "platinum"].includes(sponsor.tier))} isMobile={isMobile} />

      {/* News Quotes */}
      <Flex align="center" direction={isMobile ? "column" : "row"} justify="center" mt="8vh" mx="4vw" h="100%" ta="center">
        <NewsQuote
          quote={`"Penticton Robotics needs to build and program robots to perform challenging tasks against a field of competitors.They must also raise
          funds, design a team ‘brand’, hone teamwork skills, and perform community outreach. In addition to learning valuable STEM and life skills,
          participants are eligible to apply for $80 million [$110 million CAD] in college scholarships.”`}
          image={{ srcSet: pentictonWesternNews, src: pentictonWesternNewsFallback, alt: "Penticton Western News logo" }}
          isMobile={isMobile}
        />

        {isMobile ? <Space h="10vh" /> : <Divider color="black" h="70vh" mx="xl" orientation="vertical" />}

        <NewsQuote
          quote={`"If they play their cards right, in February of 2023 they'll accompany the robot they’re building — all 120 pounds of it — to Victoria for
          the 2023 FIRST Robotics Competition."`}
          image={{ srcSet: pentictonNow, src: pentictonNowFallback, alt: "Penticton Now logo" }}
          isMobile={isMobile}
        />

        {isMobile ? <Space h="10vh" /> : <Divider color="black" h="70vh" mx="xl" orientation="vertical" />}

        <NewsQuote
          quote={`"FIRST is a global nonprofit organization dedicated to advancing youth in the world of science, technology, engineering, and mathematics.
          The Penticton Robotics Club first competed in the BC event in 2020, and qualified for the World Championships in Houston, Texas. Sadly, the
          global pandemic shut down that dream, and every year since, the competition has been cancelled. This year [2022/23], it's back, and the
          Penticton kids want to be there to show off their skills."`}
          image={{ src: castanet, alt: "Castanet logo" }}
          isMobile={isMobile}
        />
      </Flex>

      <Space h="10vh" />

      <Flex align="center" justify="center" direction={isMobile ? "column" : "row"}>
        <Flex align="center" justify="center" direction="column">
          <Text fz="6vh" fw="bold" ta="center">
            Social Media
          </Text>

          <Text fz="3vh" ta="center">
            Follow Us on
          </Text>

          <Group>
            <Link to="https://www.facebook.com/PentictonRobotics" style={{ textDecoration: "none" }}>
              <Image src={facebook} alt="Penticton Robotics Facebook" w="8vh" m="md" />
            </Link>
            <Link to="https://www.instagram.com/penticton_robotics/" style={{ textDecoration: "none" }}>
              <Image srcSet={instagram} src={instagramFallback} alt="Penticton Robotics Instagram" w="8vh" m="md" />
            </Link>
            <Link to="https://twitter.com/pentictonr" style={{ textDecoration: "none" }}>
              <Image src={twitter} alt="Penticton Robotics Twitter" w="8vh" m="md" />
            </Link>
          </Group>
        </Flex>

        {!isMobile && <Divider color="black" h="30vh" mx="xl" orientation="vertical" />}

        <Flex align="center" justify="center" direction="column" mt={isMobile ? "xl" : ""}>
          <Text fz="6vh" fw="bold" ta="center">
            Our Mentor
          </Text>

          <Text fz="3vh" ta="center">
            Contact Mr. Josh Walker
          </Text>

          <Link to={`mailto:${mrWalkerEmail}`} style={{ textDecoration: "none" }}>
            <Center>
              <IconMail size={50} />
              <Text ta="center" fz="h2" fw="bold" ml="xs">
                {mrWalkerEmail}
              </Text>
            </Center>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
