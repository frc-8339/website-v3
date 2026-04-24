import { Flex, Text } from "@mantine/core";
import { Sponsor as TSponsor, sponsors } from "../lib/constants";

import Sponsor, { IronSponsor } from "./Sponsor";

export default function Sponsors({ sponsors }: { sponsors: TSponsor[] }) {
  const ironSponsors = sponsors.filter((sponsor) => sponsor.tier === "iron");

  return (
    <Flex align="center" direction="column" pt="md" gap={"lg"}>
      <Text fz="8vh" fw="bold">
        Sponsors
      </Text>
      <Text fz="3vh" fw={"bold"} fs={"italic"} c="pr-yellow" ta="center" maw="80vw">
        Thank you for your generous support!
      </Text>
      <Flex justify="center" wrap="wrap" gap={"xl"}>
        {sponsors
          .filter((sponsor) => ["diamond", "platinum", "gold", "silver"].includes(sponsor.tier))
          .map((sponsor) => (
            <Sponsor key={sponsor.name} sponsor={sponsor} />
          ))}
        <IronSponsor sponsors={ironSponsors.slice(0, 5)} />
        <IronSponsor sponsors={ironSponsors.slice(5)} />
      </Flex>
    </Flex>
  );
}

Sponsors.defaultProps = { sponsors };
