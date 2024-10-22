import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Flex, Grid, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Link } from "react-router-dom";

import ballinXD from "./ballinXD.webp";

export default function AboutUs() {
  const isMobile = useMediaQuery("(max-width: 62em)");

  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Flex align="center" direction="column">
      <BackgroundImage src={ballinXD} bgsz="cover" style={{ backgroundPositionY: "60%" }}>
        <Flex w="100vw" justify="center" bg="#00000020">
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
                About Us
              </Text>
            </Grid.Col>
            <Grid.Col span={6}></Grid.Col>
          </Grid>
        </Flex>
      </BackgroundImage>

      {!isMobile ? (
        <Carousel
          withIndicators
          height={"90vh"}
          w="80%"
          mt="lg"
          loop
          controlSize={36}
          plugins={[autoplay.current]}
          styles={{ control: { backgroundColor: "white" } }}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {["2020", "2023", "2024"].map((year) => (
            <Carousel.Slide key={year}>
              <Image src={`/images/team/${year}.jpg`} h="100%" w="100%" alt={`Penticton Robotics ${year} members`} />
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <Flex m="xl" mb={0} align="center" direction="column">
          {["2020", "2023", "2024"].map((year) => (
            <>
              <Text
                maw="40vw"
                mb="sm"
                fz={isMobile ? "20vw" : "10vw"}
                fw="bolder"
                lh="1.2"
                c="pr-yellow"
                style={{
                  textShadow: isMobile ? "1.6vw 1.6vw #000" : "0.8vw 0.8vw #000",
                  paddingBottom: 0,
                }}
                ta={isMobile ? "center" : "left"}
              >
                {year}
              </Text>
              <Image src={`/images/team/${year}.jpg`} h="100%" w="100%" alt={`Penticton Robotics ${year} members`} />
            </>
          ))}
        </Flex>
      )}
      <Flex m="xl" align="center" direction="column">
        <Text w="80%" mt="xl" fz="h2">
          We are Penticton Robotics, a Penticton based FIRST robotics team meeting out of Princess Margaret Secondary. The Penticton Robotics Club is
          a diverse, student-led team of high school students with the vision and dream of representing School District 67 at the regional FIRST
          robotics competition on February 26th - March 1st, in Vancouver, British Columbia. Our challenge, as a team, is to dedicate hundreds of
          hours over the next few months to producing a robot capable of sophisticated, dynamic movement with the ability to follow complex commands
          to satisfy a list of tasks provided by the robotics competition. The large-scale event is known worldwide as FIRST or “For Inspiration and
          Recognition of Science and Technology.” FIRST is a global nonprofit organization dedicated to preparing and leading the next generation of
          youth into the world of science, technology, engineering, and mathematics. You can learn more about FIRST on the "
          <Link to="/first">What is FIRST?</Link>" menu tab. <br />
          <br />
          In our rookie year, at the regional competition in Victoria, our team, despite all odds, made it all the way to quarter-finals and was
          awarded the “2020 Rookie All-Star Team,” qualifing us for the World Championships in Houston, Texas. Unfortunately, our dreams were cut
          short as the pandemic shut down our ability to compete on the world stage. At this upcoming competition, we are determined to continue
          excelling in robotics and hopefully achieve even more as a newly formed FIRST team. <br />
          <br />
          In 2019, we raised over $20,000 to pay for the parts to complete the build of the competition robot and to cover all travel expeses
          associated with our trip to the Victoria competition. This year, we have a similar goal, we need to raise around $22,000. In order to reach
          this goal, we are seeking donations and sponsors. All donations and sponsorships are precious and gratefully received. Any contribution, big
          or small, is greatly appreciated and brings us one step closer to making our dreams a reality! Please consult our "
          <Link to="/power">Sponsor/Donate</Link>" page if you are interested in making a monetary contribution.
        </Text>
      </Flex>
    </Flex>
  );
}
