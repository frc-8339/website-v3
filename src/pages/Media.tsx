import { Box, Button, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import HomeTopButton from "../components/Buttons/HomeTop";

export default function AboutUs() {
  return (
    <Box style={{ backgroundColor: "#fbb416a0" }}>
      <Flex align="center" direction="column">
        <Text
          miw="30vw"
          fz={useMediaQuery("(max-width: 62em)") ? "20vw" : "10vw"}
          fw="bolder"
          c="pr-yellow"
          style={{
            textShadow: useMediaQuery("(max-width: 62em)") ? "1.6vw 1.6vw #000" : "0.8vw 0.8vw #000",
            paddingBottom: 0,
            paddingLeft: "16.4%",
            paddingRight: "16.4%",
            backgroundSize: "cover",
            backgroundPositionY: "center",
          }}
        >
          Media
        </Text>

        <Flex m="xl" align="center" direction="column">
          <Text w="80%" mt="xl" fz="h2">
            <Image src="public/images/PhotoDrive2023-24.png" />
            <Button fullWidth color="rgba(1, 1, 1, 1)" c="pr-yellow">2024 Photo Drive</Button>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
