import { Carousel } from "@mantine/carousel";
import { Box, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";

export default function AboutUs() {
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
          About Us
        </Text>

        <Flex m="xl" align="center" direction="column">
          <Carousel withIndicators w="80%" mt="lg" loop>
            {["2020", "2023", "2024"].map((year) => (
              <Carousel.Slide key={year}>
                <Image src={`/images/team/${year}.jpg`} h="100%" w="100%" alt={`Penticton Robotics ${year} members`} />
              </Carousel.Slide>
            ))}
          </Carousel>

          <Text w="80%" mt="xl" fz="h2">
            We are Penticton Robotics, a Penticton based FIRST robotics team meeting out of Princess Margaret Secondary. The Penticton Robotics Club
            is a diverse, student-led team of high school students with the vision and dream of representing School District 67 at the regional FIRST
            robotics competition on March 1st, 2023, in Victoria, British Columbia. Our challenge, as a team, is to dedicate hundreds of hours over
            the next few months to producing a robot capable of sophisticated, dynamic movement with the ability to follow complex commands to satisfy
            a list of tasks provided by the robotics competition. The large-scale event is known worldwide as FIRST or “For Inspiration and
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
            associated with our trip to the Victoria competition. This year, we have a similar goal, we need to raise around $22,000. In order to
            reach this goal, we are seeking donations and sponsors. All donations and sponsorships are precious and gratefully received. Any
            contribution, big or small, is greatly appreciated and brings us one step closer to making our dreams a reality! Please consult our "
            <Link to="/sponsor">Sponsor/Donate</Link>" page if you are interested in making a monetary contribution.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
