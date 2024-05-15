import { Box, Center, Flex, Grid, Image, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconMail } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import TopButton from "../../components/Buttons/TopButton";
import CountdownTimer from "../../components/CountdownTimer";
import Constants from "../../lib/commons";
import classes from "./index.module.css";

const competitionDate = new Date(1736010000000);

const buttons: {
  title: string;
  url: string;
}[] = [
  { title: "Student Benefits", url: "/benefits" },
  { title: "Apply to Join", url: "https://docs.google.com/forms/d/e/1FAIpQLSdyxV6KFTOH4CrVNiCXxE-if7KObaapBJ_KSYYoopuZmHnKNw/viewform" },
  { title: "Sponsor/Donate", url: "/sponsor" },
  { title: "Event", url: "/events" },
];

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box>
      <Box className={classes.content}>
        <Flex className={classes.overlay} align="center" direction="column">
          <Image
            className={classes.logo}
            {...(!isMobile ? { mah: "30vh", w: "auto" } : { h: "auto", maw: "80vw" })}
            src="/images/First+8339LogoBlack.webp"
          />

          <CountdownTimer date={competitionDate} />

          <Grid justify="center" mb="lg" visibleFrom="lg">
            <Grid.Col span={5}>
              {buttons.map((button, index) =>
                index % 2 === 0 ? <TopButton key={`${button.title} ${button.url}`} title={button.title} url={button.url} /> : null,
              )}
            </Grid.Col>

            <Grid.Col span={5}>
              {buttons.map((button, index) =>
                index % 2 !== 0 ? <TopButton key={`${button.title} ${button.url}`} title={button.title} url={button.url} /> : null,
              )}
            </Grid.Col>
          </Grid>

          <Flex align="center" direction="column" mb="lg" hiddenFrom="lg">
            {buttons.map((button) => (
              <TopButton key={`${button.title} ${button.url}`} title={button.title} url={button.url} />
            ))}
          </Flex>
        </Flex>
      </Box>

      <Link to={`mailto:${Constants.email}`} style={{ textDecoration: "none" }}>
        <Center h="15vh">
          <IconMail color="#FBB416" size={50} />

          <Text ta="center" fz="h2" c="pr-yellow" fw="bold" ml="xs">
            {Constants.email}
          </Text>
        </Center>
      </Link>

      <Flex align="center" direction="column" bg="#8E6302" pt={"md"}>
        <Title c="pr-yellow">Sponsors</Title>
        {
          // TODO: Change sponsors
        }
        <Image src="https://pentictonrobotics.ca/gallery_gen/3826b8df02f18f12f38d8164b41d782d.png" alt="Sponsors" w="80vw" />
      </Flex>
    </Box>
  );
}
