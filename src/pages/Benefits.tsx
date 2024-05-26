import { Carousel } from "@mantine/carousel";
import { Box, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { url } from "inspector";
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
          style={{ textShadow: useMediaQuery("(max-width: 62em)") ? "1.6vw 1.6vw #000" : "0.8vw 0.8vw #000",paddingBottom: 0, paddingLeft: "16.4%", paddingRight: "16.4%" ,backgroundImage: "url('/images/team/2024.jpg')", backgroundSize: "cover", backgroundPositionY: "center" }}
        >
          Student Benefits
        </Text>

        <Flex m="xl" align="center" direction="column">

          <Text w="80%" mt="xl" fz="h2">
            -Participating in a FIRST Robotics team will help you build real world skills in areas from stem to business management to self confidence.<br/>
            -FIRST Robotics looks amazing on a resume and provides countless talking points for countless applications.<br/>
            -Being on a team creates a community of like-minded students.<br/>
            -Because of the range of activities all happening in the same place, students get to explore their interests in many different areas which helps decide what to do post-secondary.<br/>
            -There are approximately 80 million dollars up for grabs in FIRST Robotics scholarships and bursaries.<br/>
            -Students learn how to use sophisticated software, hardware, and power tools.<br/>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
