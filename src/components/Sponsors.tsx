import { Flex, Text } from "@mantine/core";
import { Sponsor as TSponsor, sponsors } from "../lib/constants";

import Sponsor from "./Sponsor";

export default function Sponsors({ sponsors }: { sponsors: TSponsor[] }) {
  return (
    <Flex align="center" direction="column" pt="md" gap={"lg"}>
      <Text fz="8vh" fw="bold">
        Sponsors
      </Text>
      <Flex justify="center" wrap="wrap" gap={"xl"}>
        {sponsors
          .filter((sponsor) => ["diamond", "platinum", "gold", "silver", "iron"].includes(sponsor.tier))
          .map((sponsor) => (
            <Sponsor key={sponsor.name} sponsor={sponsor} />
          ))}
      </Flex>
    </Flex>
  );
}

Sponsors.defaultProps = { sponsors };