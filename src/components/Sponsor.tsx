import { Box, Image, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { Sponsor as TSponsor } from "../lib/constants";

const sponsorsTierColors: Record<string, { from: string; to: string; deg: number }> = {
  diamond: { from: "#bfe8f5", to: "#9debff", deg: 90 },
  platinum: { from: "#c0c0c0", to: "#a9a9a9", deg: 90 },
  gold: { from: "#ffd700", to: "#daa520", deg: 90 },
  silver: { from: "#c0c0c0", to: "#a9a9a9", deg: 90 },
  bronze: { from: "#cd7f32", to: "#8b4513", deg: 90 },
  iron: { from: "#8b4513", to: "#654321", deg: 90 },
};

export default function Sponsor({ sponsor }: { sponsor: TSponsor }) {
  return (
    <Stack
      justify="center"
      align="center"
      bd="#FBB416 solid 1rem"
      p="xl"
      style={{ borderRadius: "4rem" }}
      bg={sponsor.invertBackground ? "black" : "white"}
      c={sponsor.invertBackground ? "pr-yellow" : "black"}
    >
      <Box w="16vw" h="16vw">
        {sponsor.image ? (
          sponsor.link ? (
            <Link to={sponsor.link}>
              <Image src={sponsor.image} w="16vw" h="16vw" fit="contain" />
            </Link>
          ) : (
            <Image src={sponsor.image} w="16vw" h="16vw" fit="contain" />
          )
        ) : null}
      </Box>
      <Text fz="h1" fw="bold" variant="gradient" gradient={sponsorsTierColors[sponsor.tier] || { from: "#000", to: "#000", deg: 90 }}>
        {sponsor.name}
      </Text>
      {sponsor.link ? (
        <Link to={sponsor.link}>
          <Text>{sponsor.link}</Text>
        </Link>
      ) : null}
    </Stack>
  );
}
