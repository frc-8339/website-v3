import { Box, Image, Stack, Text } from "@mantine/core";
import { Sponsor as TSponsor } from "../lib/constants";
import { Link } from "react-router-dom";

export default function Sponsor({ sponsor }: { sponsor: TSponsor }) {
  return (
    <Stack
      justify="center"
      align="center"
      bd={"#FBB416 solid 1rem"}
      p="xl"
      style={{
        borderRadius: "4rem",
      }}
      bg={sponsor.invertBackground ? "black" : "white"}
      c={sponsor.invertBackground ? "pr-yellow" : "black"}
    >
      <Box w="25vw" h="25vw">
        <Link to={sponsor.link}>
        {sponsor.image ? <Image src={sponsor.image} w="25vw" h="25vw" fit="contain" /> : null}
        </Link>
      </Box>
      <Text fz={"h1"} fw={"bold"}>
        {sponsor.name}
      </Text>
      <Link to={sponsor.link}>
        <Text>{sponsor.link}</Text>
      </Link>
      <Text>{sponsor.tier}</Text>
    </Stack>
  );
}
