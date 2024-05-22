import { BackgroundImage, Box, Center, Flex, Grid, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconMail } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import HomeTopButton from "../components/Buttons/HomeTop";
import CountdownTimer from "../components/CountdownTimer";
import { competitionDate, email, homeButtons } from "../lib/constants";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <BackgroundImage src="/images/53576296439_a58071c9d4_o croppedButOpaquer.png" bgsz="contain">
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

      <Flex align="center" direction="column" bg="#8E6302" pt={"md"}>
        <Text c="pr-yellow" fz="8vh" fw="bold" style={{ textShadow: "0.64vh 0.64vh #000" }}>
          Sponsors
        </Text>
        <Image src="/images/sponsors.svg" alt="Sponsors" w="80vw" />
      </Flex>
    </BackgroundImage>
  );
}
