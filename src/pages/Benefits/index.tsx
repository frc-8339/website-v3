import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Flex, Grid, Image, List, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Benefits() {
  const isMobile = useMediaQuery("(max-width: 62em)");

  return (
    <Flex align="center" direction="column" id="benefits">
      <BackgroundImage src="/images/team/2024.jpg" bgsz="cover" style={{ backgroundPositionY: "43%" }}>
        <Flex w="100%" justify="center" bg="#00000080">
          <Grid w="80%" align="center" justify="space-between">
            <Grid.Col span={3}>
              <Text
                maw="40vw"
                fz={isMobile ? "20vw" : "10vw"}
                fw="bolder"
                lh="1.2"
                style={{
                  textShadow: isMobile ? "1.6vw 1.6vw #000" : "0.8vw 0.8vw #000",
                  paddingBottom: 0,
                  paddingLeft: "10%",
                }}
                ta={isMobile ? "center" : "left"}
              >
                Student Benefits
              </Text>
            </Grid.Col>
            <Grid.Col span={6}></Grid.Col>
          </Grid>
        </Flex>
      </BackgroundImage>

      {/* <StudentsCarousel /> */}

      <Flex m="xl" align="center" direction="column">
        <List w="80%" styles={{ item: { fontSize: "1.7rem" } }}>
          <List.Item>
            Participating in a FIRST Robotics team will help you build real world skills in areas from stem to business management to self confidence.
          </List.Item>
          <List.Item>FIRST Robotics looks amazing on a resume and provides countless talking points for countless applications.</List.Item>
          <List.Item>Being on a team creates a community of like-minded students.</List.Item>
          <List.Item>
            Because of the range of activities all happening in the same place, students get to explore their interests in many different areas which
            helps decide what to do post-secondary.
          </List.Item>
          <List.Item>There are approximately 80 million dollars up for grabs in FIRST Robotics scholarships and bursaries.</List.Item>
          <List.Item>Students learn how to use sophisticated software, hardware, and power tools.</List.Item>
        </List>
      </Flex>
    </Flex>
  );
}

import malakaiFallback from "./works/malakai.jpg";

import marcusFallback from "./works/marcus.jpg";

function StudentsCarousel() {
  return (
    <Carousel dragFree draggable loop slideGap="0" height="40vh" w="80%">
      <Carousel.Slide w="10%">
        <Image src={malakaiFallback} w="10%" fit="contain" alt="Malakai" />
      </Carousel.Slide>

      <Carousel.Slide w="10%">
        <Image src={marcusFallback} w="10%" fit="contain" alt="Marcus" />
      </Carousel.Slide>
    </Carousel>
  );
}

StudentsCarousel;
