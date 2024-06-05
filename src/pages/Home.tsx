import { BackgroundImage, Box, Center, Flex, Grid, Group, Image, Space, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconMail } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import HomeTopButton from "../components/Buttons/HomeTop";
import CountdownTimer from "../components/CountdownTimer";
import { competitionDate, email, homeButtons, mrWalkerEmail, sponsorFiles } from "../lib/constants";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box bg="#8E6302">
      <BackgroundImage src="/images/2024CompetitionRobotInPits.webp" bgsz="cover" bgr="repeat" bgp="0 1000px">
        <Flex align="center" direction="column" bg="#fbb41680" w="100%" h="100%">
          <Image {...(!isMobile ? { mah: "30vh", w: "auto" } : { h: "auto", maw: "80vw" })} src="/images/First+8339LogoBlack.webp" />
          <CountdownTimer date={competitionDate} />
          <Grid justify="center" mb="lg" visibleFrom="lg">
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
          <Flex align="center" direction="column" mb="lg" hiddenFrom="lg">
            {homeButtons.map((button) => (
              <HomeTopButton key={`${button.title} ${button.url}`} title={button.title} url={button.url} />
            ))}
          </Flex>
        </Flex>
      </BackgroundImage>
      {/* Email */}
      <BackgroundImage src="/images/code.png">
        <Box bg="rgba(0, 0, 0, 0.7)">
          <Link to={`mailto:${email}`} style={{ textDecoration: "none" }}>
            <Center h="15vh">
              <IconMail color="#FBB416" size={50} />
              <Text ta="center" fz="h2" c="pr-yellow" fw="bold" ml="xs">
                {email}
              </Text>
            </Center>
          </Link>
        </Box>
      </BackgroundImage>
      {/* Sponsors */}
      <Flex align="center" direction="column" pt="md">
        <Text c="pr-yellow" fz="8vh" fw="bold" style={{ textShadow: "0.64vh 0.64vh #000" }}>
          Sponsors
        </Text>
        <Flex align="center" justify="center" wrap="wrap">
          {sponsorFiles.map((file) => (
            <Image key={file} src={file} alt={`Sponsor ${file}`} w="22vw" m="3vw" />
          ))}
        </Flex>
      </Flex>
      {/* News Quotes */}
      <Flex align="center" direction="column" mt="8vh" w="100%" h="100%" ta="center">
        <Text c="white" fz="4vh" fw="bold" lh={1.1} maw="80vw">
          "Penticton Robotics needs to build and program robots to perform challenging tasks against a field of competitors.They must also raise
          funds, design a team ‘brand’, hone teamwork skills, and perform community outreach. In addition to learning valuable STEM and life skills,
          participants are eligible to apply for $80 million [$110 million CAD] in college scholarships.”
        </Text>
        <Image mt="lg" {...(!isMobile ? { mah: "10vh", w: "auto" } : { h: "auto", maw: "50vw" })} src="/images/Penticton-Western-News.webp" />

        <Text mt="10vh" c="white" fz="4vh" fw="bold" lh={1.1} maw="80vw">
          "If they play their cards right, in February of 2023 they'll accompany the robot they’re building -- all 120 pounds of it -- to Victoria for
          the 2023 FIRST (For Inspiration and Recognition of Science and Technology) Robotics Competition."
        </Text>
        <Image mt="lg" {...(!isMobile ? { mah: "10vh", w: "auto" } : { h: "auto", maw: "50vw" })} src="/images/PentictonNow-Logo.png" />

        <Text mt="10vh" c="white" fz="4vh" fw="bold" lh={1.1} maw="80vw">
          "FIRST is a global nonprofit organization dedicated to advancing youth in the world of science, technology, engineering, and mathematics.
          The Penticton Robotics Club first competed in the BC event in 2020, and qualified for the World Championships in Houston, Texas. Sadly, the
          global pandemic shut down that dream, and every year since, the competition has been cancelled. This year [2022/23], it's back, and the
          Penticton kids want to be there to show off their skills."
        </Text>
        <Image mt="lg" {...(!isMobile ? { mah: "10vh", w: "auto" } : { h: "auto", maw: "50vw" })} src="/images/castanet-logo.svg" />
      </Flex>

      <Space h="10vh" />

      <Flex align="center" justify="center" direction="column">
        <Text c="white" fz="6vh" fw="bold" ta="center">
          Social Media
        </Text>

        <Text c="white" fz="3vh" ta="center">
          Follow Us on
        </Text>

        <Group>
          <Link to="https://www.facebook.com/PentictonRobotics" style={{ textDecoration: "none" }}>
            <Image src="/images/facebook.svg" alt="Facebook" w="10vh" m="md" />
          </Link>
          <Link to="https://www.instagram.com/penticton_robotics/" style={{ textDecoration: "none" }}>
            <Image src="/images/instagram.svg" alt="Instagram" w="8vh" m="md" />
          </Link>
          <Link to="https://twitter.com/pentictonr" style={{ textDecoration: "none" }}>
            <Image src="/images/twitter.svg" alt="Twitter" w="8vh" m="md" />
          </Link>
        </Group>
      </Flex>

      <Space h="5vh" />

      <Flex align="center" justify="center" direction="column">
        <Text c="white" fz="6vh" fw="bold" ta="center">
          Our Mentor
        </Text>

        <Text c="white" fz="3vh" ta="center">
          Contact Mr. Josh Walker
        </Text>

        <Space h="1vh" />

        <Link to={`mailto:${mrWalkerEmail}`} style={{ textDecoration: "none" }}>
          <Center>
            <IconMail color="#FBB416" size={50} />
            <Text ta="center" fz="h2" c="pr-yellow" fw="bold" ml="xs">
              {mrWalkerEmail}
            </Text>
          </Center>
        </Link>
      </Flex>

      <Space h="10vh" />
    </Box>
  );
}
