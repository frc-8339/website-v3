import { Box, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CountdownTimer from "../components/CountdownTimer";
import { competitionDate } from "../lib/constants";

export default function WhatIsFirst() {
  const isMobile = useMediaQuery("(max-width: 75em)");

  return (
    <Box style={{ backgroundColor: "#fbb416a0" }}>
      <Flex align="center" direction="column">
        <Text
          miw="30vw"
          fz={useMediaQuery("(max-width: 62em)") ? "20vw" : "10vw"}
          fw="bolder"
          c="pr-yellow"
          style={{ textShadow: useMediaQuery("(max-width: 62em)") ? "1.6vw 1.6vw #000" : "0.8vw 0.8vw #000" }}
        >
          What is FIRST?
        </Text>
        <Flex m="xl" align={isMobile ? "center" : "start"} direction={isMobile ? "column" : "unset"}>
          <iframe
            width="800vw"
            height="450vh"
            src="https://www.youtube.com/embed/Jd29kzjclV0"
            title="About FIRST Robotics Competition (2021)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Flex>
        <Text {...(isMobile ? { mt: "lg" } : { ml: "xl" })} fz="h2">
          FIRST is a global robotics competition that hopes to inspire the next generation of scientists and engineers. FIRST stands for “For
          Inspiration and Recognition of Science and Technology.” Combining the excitement of sport with the rigors of science and technology, FIRST
          Robotics Competition is considered the ultimate Sport for the Mind. High-school student participants call it “the hardest fun you’ll ever
          have.” Under strict rules, limited time and resources, teams of students are challenged to raise funds, design a team "brand," hone teamwork
          skills, and build and program industrial-size robots to play a difficult field game against like-minded competitors. It’s as close to
          real-world engineering as a student can get. Volunteer professional mentors lend their time and talents to guide each team. Each season ends
          with an exciting FIRST Championship.
        </Text>
        <CountdownTimer date={competitionDate} />
        <br />
      </Flex>
    </Box>
  );
}
