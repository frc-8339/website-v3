import { BackgroundImage, Box, Flex, List, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function AboutUs() {
  const isMobile = useMediaQuery("(max-width: 62em)");

  return (
    <Box>
      <Flex align="center" direction="column">
        <BackgroundImage src="/images/team/2024.jpg" bgsz="cover" style={{ backgroundPositionY: "center" }}>
          <Box bg="#00000080">
            <Text
              miw="30vw"
              fz={isMobile ? "20vw" : "10vw"}
              fw="bolder"
              c="pr-yellow"
              style={{
                textShadow: isMobile ? "1.6vw 1.6vw #000" : "0.8vw 0.8vw #000",
                paddingBottom: 0,
                paddingLeft: "16.4%",
                paddingRight: "16.4%",
              }}
            >
              Student Benefits
            </Text>
          </Box>
        </BackgroundImage>

        <Flex m="xl" align="center" direction="column">
          <List w="80%" styles={{ item: { fontSize: "1.7rem" } }}>
            <List.Item>
              Participating in a FIRST Robotics team will help you build real world skills in areas from stem to business management to self
              confidence.
            </List.Item>
            <List.Item>FIRST Robotics looks amazing on a resume and provides countless talking points for countless applications.</List.Item>
            <List.Item>Being on a team creates a community of like-minded students.</List.Item>
            <List.Item>
              Because of the range of activities all happening in the same place, students get to explore their interests in many different areas
              which helps decide what to do post-secondary.
            </List.Item>
            <List.Item>There are approximately 80 million dollars up for grabs in FIRST Robotics scholarships and bursaries.</List.Item>
            <List.Item>Students learn how to use sophisticated software, hardware, and power tools.</List.Item>
          </List>
        </Flex>
      </Flex>
    </Box>
  );
}
