import { Flex, Image, Text } from "@mantine/core";
import type { Sponsor } from "../lib/constants";
import { sponsors } from "../lib/constants";

function Sponsor({ name, badge, link, isMobile }: Sponsor & { isMobile?: boolean }) {
  return (
    <a href={link}>
      <Image src={badge} alt={`Sponsor ${name}`} w={isMobile ? "70vw" : "22vw"} m="3vw" />
    </a>
  );
}

export default function Sponsors({ sponsors, isMobile }: { sponsors: Sponsor[]; isMobile?: boolean }) {
  return (
    <Flex align="center" direction="column" pt="md">
      <Text fz="8vh" fw="bold">
        Sponsors
      </Text>
      <Flex align="center" justify="center" wrap="wrap">
        {sponsors
          .filter((sponsor) => ["diamond", "platinum", "gold", "silver"].includes(sponsor.tier))
          .map((sponsor) => (
            <Sponsor key={sponsor.name} {...sponsor} isMobile={isMobile} />
          ))}
      </Flex>
    </Flex>
  );
}

Sponsors.defaultProps = { sponsors };
