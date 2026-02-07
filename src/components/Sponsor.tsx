import { Image, Stack, Text } from "@mantine/core";
import { Sponsor as TSponsor } from "../lib/constants";

export default function Sponsor({ sponsor }: { sponsor: TSponsor }) {
  return (
    <Stack justify="center">
      <Image src={sponsor.image} />
      <Text fz={"lg"} fw={"bold"}>
        {sponsor.name}
      </Text>
      <Text>{sponsor.link}</Text>
      <Text>{sponsor.tier}</Text>
    </Stack>
  );
}
