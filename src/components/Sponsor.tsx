import { Box, Image, Stack, Text } from "@mantine/core";
import { Sponsor as TSponsor } from "../lib/constants";
import { Link } from "react-router-dom";

const sponsorsTierMapping: Record<string, string> = {
  diamond: "Diamond",
  platinum: "Platinum",
  gold: "Gold",
  silver: "Silver",
  bronze: "Bronze",
  iron: "Iron",
};

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
      <Box w="16vw" h="16vw">
        <Link to={sponsor.link}>{sponsor.image ? <Image src={sponsor.image} w="16vw" h="16vw" fit="contain" /> : null}</Link>
      </Box>
      <Text fz={"h1"} fw={"bold"}>
        {sponsor.name}
      </Text>
      <Link to={sponsor.link}>
        <Text>{sponsor.link}</Text>
      </Link>
      <Text>{sponsorsTierMapping[sponsor.tier] || sponsor.tier} Sponsor</Text>
    </Stack>
  );
}
