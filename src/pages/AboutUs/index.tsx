import { BackgroundImage, Flex, Grid, Group, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";

import rookie2020 from "./awards/2020 Rookie.svg";
import rookieDesign2021 from "./awards/2021 Rookie Design.svg";
import creativity2024 from "./awards/2024 Creativity.svg";
import winner2025 from "./awards/2025 Winner.svg";
import ballinXD from "./ballinXD.webp";

const yearsWithPicture = ["2020", "2023", "2024", "2025", "2026"];

export default function AboutUs() {
  const isMobile = useMediaQuery("(max-width: 62em)");

  return (
    <Flex align="center" direction="column" id="about" bg="black">
      <BackgroundImage src={ballinXD} bgsz="cover" style={{ backgroundPositionY: "60%" }}>
        <Flex w="100%" justify="center" bg="#00000020">
          <Grid w="80%" align="center" justify="space-between">
            <Grid.Col span={3}>
              <Text
                maw="40vw"
                fz={isMobile ? "10vw" : "5vw"}
                fw="bolder"
                ff="Audiowide"
                lh="1.2"
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

      <Grid m={"lg"}>
        <Grid.Col span={6}>
          <Group align="center" justify="center">
            {yearsWithPicture.map((year) => (
              <Image src={`/images/team/${year}.jpg`} h="100%" w="45%" alt={`Penticton Robotics ${year} members`} />
            ))}
          </Group>
        </Grid.Col>
        <Grid.Col span={6}>
          <Group align="center" justify="center" gap={"lg"}>
            <Image w="35%" src={rookie2020} alt="2020 Rookie All-Star Team" />
            <Image w="35%" src={rookieDesign2021} alt="2021 Rookie Design Award" />
            <Image w="35%" src={creativity2024} alt="2024 Creativity Award" />
            <Image w="35%" src={winner2025} alt="2025 Winner" />
          </Group>
        </Grid.Col>
      </Grid>
      <Text w="80%" m="xl" fz="h2">
        We are a Penticton based FIRST robotics team meeting at Princess Margaret Secondary. The robotics club is a diverse, student-led team of high
        school students with the dream of representing School District 67 at the regional FIRST robotics competitions in Vancouver, British Columbia.
        Our challenge as a team is to dedicate hundreds of hours over the span of a few months to create a sophisticated robot capable of dynamic movement
        with the ability to follow complex commands to satisfy a list of tasks provided by the robotics competition. <br />
        <br />
        In our rookie year at the regional competition in Victoria, our team, despite all the odds, made it all the way to quarter finals and was rewarded
        the “2020 Rookie All-Star Team”, qualifying us for the World Championships in Houston, Texas. Unfortunately, our dreams were cut short due to the
        pandemic as it shut down our ability to compete there. Every competition we attend, we are determined to continue excelling in robotics and hopefully
        achieve even more as a team.
        <br />
        <br />
        We are seeking donations and sponsors, all donations and sponsorships are precious and gratefully accepted. Any contribution, big or small, is greatly 
        appreciated and brings us another step closer to making our dreams a reality! Please consult our <Link to="/power">Sponsor/Donate</Link>
        page if you are interested in making a monetary contribution.
      </Text>
      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={64} c="pr-yellow">
      What is FIRST?
      </Text>
      <Text w="80%" m="xl" fz="h2">
        The large-scale event is known worldwide as FIRST (For Inspiration and Recognition of Science and Technology). FIRST is a global nonprofit
        organization dedicated to preparing and guiding the next generation of youth into the world of STEM (science, technology, engineering and mathematics).
        Combining the excitement of sport with the rigors of science and technology, the FIRST Robotics Competition is considered the ultimate sport for
        the mind. Under strict rules, limited time and resources, teams of high school students are challenged to raise funds, create a team “brand”, 
        hone teamwork skills and build and program robots to compete in a field game against like-minded competitors. It’s as close to the real world 
        of engineering as a student can get. For more information, check the <a href="https://firstroboticscanada.org/frc/"> FIRST Robotics page</a>
      </Text>
      <Text m="lg" px={16} ff="Audiowide" fw={"bolder"} fz={64} c="pr-yellow">
      Benefits
      </Text>
      <Text w="80%" m="xl" fz="h2">
        - Help build real world skills in areas such as STEM, business management, self confidence and more! <br />
        - Looks AMAZING on a resume and provides many talking points for countless applications <br />
        - Helps create a community of like-minded students <br />
        - Due to the range of several activities happening at the same place, students are able to explore their interests in many different areas which
        - helps with future decisions for post-secondary. Students are able to learn how to use sophisticated software, hardware, power tools and more. < br/>
        - Approximately 80 million dollars up for grabs in FIRST Robotics scholarships and bursaries.
      </Text>
    </Flex>
  );
}
